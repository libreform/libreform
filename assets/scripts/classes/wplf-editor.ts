import globalData from '../lib/global-data'
import log from '../lib/log'
import { waitForNextTick } from '../lib/wait'
import isElementish from '../lib/is-elementish'

import { Field, List, ResponseType, WPLF_EditorState } from '../types'
import getAttribute from '../lib/get-attribute'

import WPLF from './wplf'
import { WPLF_Form } from './wplf-form'

import React from 'react'
import ReactDOM from 'react-dom'
import SubmissionList from '../react/SubmissionList'

import api from './wplf-api'

const { i18n } = globalData

const $ = window.jQuery
const _ = window._
const wp = window.wp

export default class WPLF_Editor {
  wplf: WPLF
  state: WPLF_EditorState

  formInstance: WPLF_Form | null = null
  inputs: List<Element>
  previewEl: HTMLElement // This is HTMLElement on purpose, we can't use a form element due to nested forms
  publishButton: Element
  fieldTemplate: Element

  // Codemirror instances:
  contentEditor: any
  successMessageEditor: any

  constructor(wplfInstance: WPLF) {
    const fields = document.querySelector('#wplfFields')
    const additionalFields = document.querySelector('#wplfAdditionalFields')
    const newFields = document.querySelector('#wplfNewFields')
    const deletedFields = document.querySelector('#wplfDeletedFields')
    const historyFields = document.querySelector('#wplfHistoryFields')
    const allowSave = document.querySelector('#wplfAllowSave')
    const submissionsEl = document.querySelector(
      '.wplf-editor .wplf-submissionList'
    )
    const editorEl = document.querySelector('.wplf-editor .wplf-cmEditor')
    const thankYouEl = document.querySelector(
      '.wplf-afterSubmission .wplf-cmEditor'
    )
    const previewEl = document.querySelector('.wplf-editor__preview')
    const publishButton = document.querySelector('#publish')
    const sidebarFieldTemplate = document.querySelector(
      '.wplf-formFields > .wplf-formFields__field'
    )

    if (!globalData.settings.hasUnfilteredHtml) {
      setTimeout(() => {
        alert(globalData.i18n.noUnfilteredHtml)
      }, 500) // Delay a bit to allow stuff to init before showing a blocking element
    }

    if (
      isElementish(fields) &&
      isElementish(additionalFields) &&
      isElementish(newFields) &&
      isElementish(deletedFields) &&
      isElementish(historyFields) &&
      isElementish(allowSave) &&
      isElementish(submissionsEl) &&
      isElementish(editorEl) &&
      isElementish(thankYouEl) &&
      isElementish(previewEl) &&
      isElementish(publishButton) &&
      isElementish(sidebarFieldTemplate)
    ) {
      const editorIsReadonly = $(editorEl).attr('readonly') ? true : false
      const initialState = {
        historyFields: JSON.parse(getAttribute(historyFields, 'value') || '{}'), // Will stay static through until the page is refreshed again

        fields: JSON.parse(getAttribute(fields, 'value') || 'null'),
        additionalFields: JSON.parse(
          getAttribute(additionalFields, 'value') || 'null'
        ),
        newFields: [],
        deletedFields: [],
        allowSave: false,
      }

      this.wplf = wplfInstance
      this.state = initialState
      this.inputs = {
        fields,
        additionalFields,
        newFields,
        deletedFields,
        historyFields,
        allowSave,
      }

      this.fieldTemplate = sidebarFieldTemplate.cloneNode(true) as Element
      this.fieldTemplate.removeAttribute('hidden')

      this.previewEl = previewEl as HTMLElement
      this.publishButton = publishButton
      this.contentEditor = editorIsReadonly
        ? null
        : wp.codeEditor.initialize($(editorEl), globalData.codeMirror)
      this.successMessageEditor = wp.codeEditor.initialize(
        $(thankYouEl),
        globalData.codeMirror
      )
      this.handleContentChange = this.handleContentChange.bind(this)

      if (!editorIsReadonly) {
        // If the editor is in read-only mode, no need to refresh the preview as it can't change anyway.

        this.contentEditor.codemirror.on(
          'changes',
          _.debounce(this.handleContentChange, 1000)
        )

        this.handleContentChange(this.contentEditor.codemirror) // Triggers preview build
      } else {
        this.handleContentChange(editorEl.getAttribute('value'))
      }

      if (!globalData.settings.hasUnfilteredHtml) {
        this.tryToPreventEdit()
      }

      const formId = globalData.post?.ID || null

      if (formId) {
        ReactDOM.render(
          React.createElement(
            SubmissionList,
            {
              formId,
            },
            null
          ),
          submissionsEl
        )
      }
    } else {
      throw new Error(
        'Missing some or all of the required elements to run WPLF_Editor'
      )
    }
  }

  setState(
    fn = (currentState: WPLF_EditorState): Partial<WPLF_EditorState> => ({})
  ) {
    const currentState = this.state
    const newState = fn(currentState)

    if (!newState) {
      // no op
      return
    }

    this.state = {
      ...currentState,
      ...newState,
    }

    this.afterStateChange()
  }

  getState() {
    return this.state
  }

  writeState() {
    Object.entries(this.inputs).forEach(([key, el]) => {
      if (key in this.state) {
        const value = this.state[key]

        if (typeof value === 'boolean') {
          el.setAttribute('value', value ? '1' : '0')
        } else {
          el.setAttribute('value', JSON.stringify(value))
        }
      }
    })
  }

  afterStateChange() {
    const state = this.getState()

    Object.entries(state).forEach(([k, v]) => {
      switch (k) {
        case 'allowSave': {
          this.writeState()

          if (v) {
            this.publishButton.removeAttribute('disabled')
          } else {
            this.publishButton.setAttribute('disabled', 'true')
          }
        }

        // no default
      }
    })
  }

  /**
   * Disable bunch of things and remove the submit button,
   * backend will handle it if necessary but it's not pretty.
   * Backend should also print a notice above the form.
   */
  tryToPreventEdit() {
    // Might as well use the jQuery since it's wp-admin.

    $('#title').prop('disabled', true)
    $('#content').prop('disabled', true)
    $('#publish').remove()
    $('#save-post').remove()
  }

  // `editor` is a CodeMirror instance or a string
  async handleContentChange(editor: string | any) {
    let { wplf, formInstance } = this
    const content = typeof editor === 'string' ? editor : editor.getValue()

    try {
      if (formInstance) {
        wplf.detach(formInstance)
        formInstance = null
      }

      // Disable submit button when the fields change
      this.setState(() => ({ allowSave: false }))

      await this.updatePreview(content)
      await this.updateFormFieldsFromPreview()
      await this.removeProblematicAttributesFromPreview()

      this.writeState()
      formInstance = wplf.attach(this.previewEl)
    } catch (e) {
      log.error('Failed to get preview', e)
    }
  }

  async updatePreview(content: string) {
    const formId = globalData.post?.ID || null

    console.log('terve')

    if (!formId) {
      return
    }

    try {
      const response = await api.requestRender(formId, content)
      const { data } = response

      if ('error' in data) {
        log.error('Unable to update preview', data)

        throw new Error(data.error)
      } else {
        const { html } = data.data
        const tmpEl = document.createElement('div')

        tmpEl.innerHTML = html
        await waitForNextTick()

        const form = tmpEl.querySelector('form')
        this.previewEl.innerHTML = form ? form.innerHTML : ''
        await waitForNextTick()
      }
    } catch (e) {
      this.previewEl.innerHTML = e.message
    }
  }

  getDuplicateNames(names: string[]) {
    return _.unique(
      names.filter((name: string) => {
        return names.filter((n: string) => n === name).length > 1
      })
    )
  }

  createFieldElement(field: Field, errorMessage: string = '') {
    const element = this.fieldTemplate.cloneNode(true) as Element
    const { name, type, required } = field
    const nameEl = element.querySelector('strong') as HTMLElement
    const typeEl = element.querySelector(
      '.wplf-formFields__field__type em'
    ) as HTMLElement
    const alert = element.querySelector('.wplf-formFields__field__alert')

    if (isElementish(nameEl) && isElementish(typeEl) && isElementish(alert)) {
      nameEl.innerText = name
      typeEl.innerText = required ? `required ${type}` : type

      if (errorMessage) {
        alert.setAttribute('title', errorMessage)

        const messages = document.createElement('p')
        const message = `<strong>${i18n.problems}</strong>${errorMessage}`.replace(
          /(?:\r\n|\r|\n)/g,
          '<br>'
        )
        messages.innerHTML = message

        alert.insertAdjacentElement('afterend', messages)
      } else {
        isElementish(alert.parentNode) && alert.parentNode.removeChild(alert)
      }
    }

    return element
  }

  async updateFormFieldsFromPreview() {
    const { historyFields, additionalFields } = this.getState()
    const el = this.previewEl
    const fieldContainer = document.querySelector('.wplf-formFields')

    if (!isElementish(fieldContainer)) {
      console.warn('Field container does not exist')

      return
    }

    let allowSave = true

    // Get all inputs with a name attribute, yes, even button.
    const fields = Array.from(
      el.querySelectorAll('input, textarea, select, button')
    )
      .filter((el) => el.getAttribute('name'))
      .reduce<Field[]>((acc, el: Element) => {
        if (el && isElementish(el)) {
          const fieldName = el.getAttribute('name')

          if (!fieldName) {
            return acc
          }

          /**
           * Remove brackets from the name, because they cause us grief.
           * The brackets are not visible in the actual data, which kinda breaks all comparisons.
           */
          const name = fieldName.replace('[]', '')
          const type = el.getAttribute('type') || el.tagName.toLowerCase()
          const required = el.getAttribute('required') !== null ? true : false
          const multiple = fieldName.endsWith('[]')
          const attributes = Object.values(el.attributes).reduce<List<string>>(
            (acc, attr) => {
              // These attributes are either harmful or already handled.
              const skipList = ['name', 'type', 'required']

              if (skipList.includes(attr.name)) {
                return acc
              }

              acc[attr.name] = attr.value

              return acc
            },
            {}
          )

          acc.push({
            name,
            type,
            required,
            multiple,
            attributes,
          })

          return acc
        }

        return acc
      }, [])

    const fieldNames = fields.map((field) => field.name)
    const duplicateNames = this.getDuplicateNames(fieldNames)

    fieldContainer.innerHTML = ''

    const fieldErrors = []

    fields.forEach((field) => {
      if (!field) {
        return
      }

      const { name, type } = field
      const historyField = Object.values(historyFields).find(
        (field) => field.name === name
      )
      let errorMessage = ''

      // names like fieldgroup[fieldname] are not supported
      if (name.match(/\w*\[\w*\]/)) {
        errorMessage = `${errorMessage}${i18n.groupedNamesNotSupportedYet}\n`
      }

      if (duplicateNames && duplicateNames.includes(name)) {
        // Allow checkboxes etc to work normally, error otherwise.

        if (!field.multiple) {
          errorMessage = `${errorMessage}${i18n.duplicateFieldName} ${name}\n`
        }
      }

      if (additionalFields.includes(name)) {
        errorMessage = `${errorMessage}${i18n.illegalName.replace(
          '{name}',
          name
        )}\n`
      }

      if (historyField && historyField.type !== type) {
        errorMessage = `${errorMessage}${i18n.fieldAlreadyExistsInDb.replace(
          '{type}',
          historyField.type
        )}\n`
      }

      if (errorMessage) {
        fieldErrors.push(errorMessage)
      }

      fieldContainer.appendChild(this.createFieldElement(field, errorMessage))
    })

    if (!fieldErrors.length) {
      allowSave = true
    } else {
      allowSave = false
    }

    const newFields = fields.filter((field) => {
      if (!field) {
        return false
      }

      const fieldInInitialData = Object.values(historyFields).find(
        (x) => x.name === field.name
      )

      return fieldInInitialData ? false : true
    })

    const deletedFields = Object.values(historyFields).filter((field) => {
      return !fieldNames.includes(field.name)
    })

    const newState: Partial<WPLF_EditorState> = {
      // After clearing the duplicates, an object will work better. Free lookups anyone?

      fields: fields.reduce<List<Field>>((acc, field) => {
        acc[field.name] = field

        return acc
      }, {}),
      newFields,
      deletedFields,
      allowSave,
    }

    this.setState(() => newState)

    await waitForNextTick()
  }

  async removeProblematicAttributesFromPreview() {
    // Names and required attributes cause problems when saving the form, remove
    const requiredEls = Array.from<Element>(
      this.previewEl.querySelectorAll('[required]')
    )
    const nameEls = Array.from<Element>(
      this.previewEl.querySelectorAll('[name]')
    )

    requiredEls.forEach((el: Element) => el.removeAttribute('required'))
    nameEls.forEach((el: Element) => el.removeAttribute('name'))

    await waitForNextTick()
  }
}

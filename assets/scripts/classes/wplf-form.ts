import globalData from '../lib/global-data'
import { request } from '../lib/create-request'
import log from '../lib/log'

import { WPLF_Tabs } from './wplf-tabs'

import {
  SubmitState,
  SubmitHandler,
  FormCallback,
  SubmissionResponse,
} from '../types'
import isElementish from '../lib/is-elementish'
import ensureNum from '../lib/ensure-num'

import { instance as api } from './wplf-api'

const delay = (amount = 1) => {
  return new Promise((resolve) => setTimeout(resolve, amount))
}

const resetForm = (wplfForm: WPLF_Form, params: Record<string, any>) => {
  const form = wplfForm.form as HTMLFormElement // Necessary cast

  // Since all type guarantees have been thrown out of the window, it's necessary to check that the element indeed has this method.
  if (form.reset) {
    form.reset()
  }
}

const defaultBeforeSendCallback = (
  wplfForm: WPLF_Form,
  params: Record<string, any>
) => {
  if (isElementish(wplfForm.form.parentNode)) {
    const parentNode = wplfForm.form.parentNode

    // Reset error and success messages, if there were any
    const messages = parentNode.querySelectorAll(
      '.wplf-errorMessage, .wplf-successMessage'
    )

    messages.forEach((element: Element) => {
      if (isElementish(element.parentNode)) {
        element.parentNode.removeChild(element)
      }
    })
  }
}

const defaultSuccessCallback = (
  wplfForm: WPLF_Form,
  params: Record<string, any>
) => {
  const { data } = params.data
  const { message = '' } = data
  const div = document.createElement('div')

  div.classList.add('wplf-successMessage')
  div.insertAdjacentHTML(
    'afterbegin',
    // message.replace(/\n/g, '<br />') // Replacing newlines with <br> elements works only in theory. Leave the data as is.
    message
  )

  wplfForm.form.insertAdjacentElement('beforebegin', div)
  wplfForm.form.classList.add('submitted')
}

const defaultErrorCallback = (
  wplfForm: WPLF_Form,
  params: Record<string, any>
) => {
  const { error, response } = params
  const div = document.createElement('div')

  div.classList.add('wplf-errorMessage')
  div.insertAdjacentHTML('afterbegin', error.message)

  if (response && response.data) {
    const d = response.data
    const keys = Object.keys(d)

    keys.forEach((key: string) => {
      const value = d[key]

      if (key === 'requiredFields') {
        const ul = document.createElement('ul')

        value.forEach((v: string) => {
          const li = document.createElement('li')
          li.innerText = v

          ul.appendChild(li)
        })

        div.appendChild(ul)
      }
    })
  }

  wplfForm.form.insertAdjacentElement('beforebegin', div)
}

/**
 * Each instance represents one form. Most class methods can be chained:
 * form.removeCallback('default', 'beforeSend').addCallback('mycallback', 'beforeSend', ...)
 */
export class WPLF_Form {
  form: HTMLElement // Technically this should be HTMLFormElement, but can't due to admin area restrictions
  id: number
  slug: string

  submitState: SubmitState = SubmitState.Unsubmitted
  submitHandler: SubmitHandler | null = null
  callbacks: {
    beforeSend: Record<string, FormCallback>
    success: Record<string, FormCallback>
    error: Record<string, FormCallback>
  } = {
    beforeSend: {
      default: defaultBeforeSendCallback,
    },
    success: {
      default: defaultSuccessCallback,
      clearOnSuccess: resetForm,
    },
    error: {
      default: defaultErrorCallback,
    },
  }

  tabs: WPLF_Tabs[] = []
  key = ''

  /**
   * Initialize the form
   */
  constructor(element: HTMLElement) {
    if (element instanceof HTMLElement !== true) {
      throw new Error('Form element invalid or missing')
    }

    this.form = element
    this.id = ensureNum(element.dataset.formId || 0)
    this.slug = element.dataset.formSlug || ''

    this.key = '_' + Math.random().toString(36).substr(2, 9)
    this.tabs = Array.from(this.form.querySelectorAll('.wplf-tabs')).map(
      (el) => {
        return new WPLF_Tabs(el)
      }
    )

    this.createSubmitHandler()
    this.attachSubmitHandler()

    const fallbackInput = element.querySelector('[name="_nojs"]')

    // Remove input that triggers the fallback so we get a JSON response
    if (fallbackInput && isElementish(fallbackInput.parentNode)) {
      fallbackInput.parentNode.removeChild(fallbackInput)
    }
  }

  /**
   * Expose the default callbacks for 3rd party usage
   */
  getDefaultCallbacks() {
    return {
      beforeSend: {
        default: defaultBeforeSendCallback,
      },
      success: {
        default: defaultSuccessCallback,
        clearOnSuccess: resetForm,
      },
      error: {
        default: defaultErrorCallback,
      },
    }
  }

  /**
   * Add a callback that runs when certain "events" happen
   */
  addCallback(name: string, type: string, callback: FormCallback) {
    const callbacks = this.callbacks
    const { beforeSend, success, error } = callbacks

    switch (type) {
      case 'beforeSend': {
        beforeSend[name] = callback
        break
      }

      case 'success': {
        success[name] = callback
        break
      }

      case 'error': {
        error[name] = callback
        break
      }

      default: {
        throw new Error(`Unknown callback type ${type}`)
      }
    }

    return this
  }

  /**
   * Prevent a callback from running
   */
  removeCallback(name: string, type: string) {
    const callbacks = this.callbacks
    const { beforeSend, success, error } = callbacks

    switch (type) {
      case 'beforeSend': {
        delete beforeSend[name]
        break
      }

      case 'success': {
        delete success[name]
        break
      }

      case 'error': {
        delete error[name]
        break
      }

      default: {
        throw new Error(`Unknown callback ${name} ${type}`)
      }
    }

    return this
  }

  /**
   * Run a callback, passing any provided params to it.
   *
   * Params can be pretty much anything depending on the context, so typing them is impossible.
   */
  private runCallback(type: string, params: Record<string, any> = {}) {
    const callbacks = this.callbacks
    const { beforeSend, success, error } = callbacks

    switch (type) {
      case 'beforeSend': {
        Object.values(beforeSend).forEach((callback) => {
          callback(this, params)
        })
        break
      }

      case 'success': {
        Object.values(success).forEach((callback) => {
          callback(this, params)
        })
        break
      }

      case 'error': {
        Object.values(error).forEach((callback) => {
          callback(this, params)
        })
        break
      }

      default: {
        throw new Error(`Unknown callback ${name} ${type}`)
      }
    }
  }

  /**
   * Attach previously created submitHandler to the form
   */
  attachSubmitHandler() {
    if (this.submitHandler) {
      log.notice('Attaching form submit handler')

      this.form.addEventListener('submit', this.submitHandler, {
        passive: false,
      })
    } else {
      log.error('Unable to attach submit handler, as it does not exist')
    }

    return this
  }

  /**
   * Removes submit handler from the form, but keeps it in memory.
   */
  removeSubmitHandler() {
    if (this.submitHandler) {
      log.notice('Removing form submit handler')

      this.form.removeEventListener('submit', this.submitHandler)
    } else {
      log.error('Unable to remove submit handler, as it does not exist')
    }

    return this
  }

  createSubmitHandler(handler?: SubmitHandler) {
    if (handler) {
      this.submitHandler = handler

      return this
    }

    this.submitHandler = async (e: Event) => {
      e.preventDefault()

      if (this.submitState === SubmitState.Submitting) {
        log.notice('Preventing double doubmission')

        return
      }

      try {
        const form = this.form
        let formData = new FormData(form as HTMLFormElement) // FormData can't be made from Element

        globalData.lang && formData.append('lang', globalData.lang)
        this.submitState = SubmitState.Submitting

        form.classList.add('submitting')
        this.runCallback('beforeSend', { formData, form })

        await delay() // DOM manipulations made in beforeSend are not available instantly.
        formData = new FormData(form as HTMLFormElement) // Now they are, and the FormData object must be recreated to contain possibly new values.

        const x = await api.sendSubmission(formData)
        const { data: response, ok } = x

        form.classList.remove('submitting')

        if ('error' in response) {
          const sand = errorWithSubmissionResponse(response.error, response)

          log.error('Invalid submission!', sand)

          throw sand
        } else if (!ok) {
          const table = errorWithSubmissionResponse(
            globalData.i18n.formSubmissionRequestFailed,
            response
          )

          throw table
        } else {
          this.submitState = SubmitState.Success
          this.runCallback('success', { data: response })
        }
      } catch (eWithSubmissionResponse: any) {
        let {
          error,
          response,
        }: { error: Error | null; response: SubmissionResponse | null } =
          eWithSubmissionResponse

        if (!error) {
          error = new Error('Unknown error')
        }

        this.submitState = SubmitState.Error
        this.runCallback('error', { error, response })
      }
    }

    return this
  }
}

function errorWithSubmissionResponse(
  msg: string,
  response: SubmissionResponse
) {
  return {
    error: new Error(msg),
    response,
  }
}

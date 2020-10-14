import { WPLF_Form } from './wplf-form'
import globalData from '../lib/global-data'

import { List } from '../types'
import ensureNum from '../lib/ensure-num'
import WPLF_Tabs from './wplf-tabs'
import api, { Client } from './wplf-api'

export default class WPLF {
  forms: List<WPLF_Form> = {}

  constructor() {
    this.initialize()
  }

  // Expose WPLF_Form and WPLF_Tabs as properties for this class.
  // Just to allow users who don't install the npm package to use these too:
  WPLF_Form = WPLF_Form
  WPLF_Tabs = WPLF_Tabs
  api: Client = api

  initialize() {
    if (globalData.settings.autoinit) {
      const forms = Array.from(
        document.querySelectorAll<HTMLElement>('form.wplf')
      ).map((form) => {
        this.attach(form)
      })
    }
  }

  findFormsById(id: number) {
    return Object.keys(this.forms).reduce<WPLF_Form[]>((acc, key) => {
      const wplfForm = this.forms[key]

      if (!wplfForm) {
        return acc
      }

      if (id === wplfForm.id) {
        acc.push(wplfForm)
      }

      // const formEl = wplfForm.form
      // const formElId = formEl.getAttribute('data-form-id')

      // if (formElId && ensureNum(formElId) === ensureNum(id)) {
      //   acc.push(wplfForm)
      // }

      return acc
    }, [])
  }

  findFormsBySlug(slug: string) {
    return Object.keys(this.forms).reduce<WPLF_Form[]>((acc, key) => {
      const wplfForm = this.forms[key]

      if (!wplfForm) {
        return acc
      }

      if (!wplfForm) {
        return acc
      }

      if (slug === wplfForm.slug) {
        acc.push(wplfForm)
      }

      // const formEl = wplfForm.form
      // const formElSlug = formEl.getAttribute('data-form-slug')

      // if (formElSlug && formElSlug === slug) {
      //   acc.push(wplfForm)
      // }

      return acc
    }, [])
  }

  attach(x: HTMLElement | WPLF_Form) {
    if (x instanceof WPLF_Form) {
      const wplfForm = x

      this.forms[wplfForm.key] = wplfForm

      return wplfForm
    }

    const element = x

    if (element instanceof Element !== true) {
      throw new Error(globalData.i18n.unableToAttachWPLF)
    }

    const wplfForm = new WPLF_Form(element)
    this.forms[wplfForm.key] = wplfForm

    wplfForm.form.removeAttribute('tabindex')
    wplfForm.form.removeAttribute('style')

    return wplfForm
  }

  detach(wplfForm: WPLF_Form) {
    this.forms[wplfForm.key].removeSubmitHandler()
    delete this.forms[wplfForm.key]

    return true
  }
}

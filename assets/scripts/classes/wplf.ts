import { WPLF_Form } from './wplf-form'
import globalData from '../lib/global-data'

import { List } from '../types'
import WPLF_Tabs from './wplf-tabs'
import api, { Client } from './wplf-api'

export default class WPLF {
  forms: List<WPLF_Form> = {}

  constructor() {
    if (globalData.settings.autoinit) {
      this.initialize()
    }
  }

  /**
   * Expose subclasses as instance variables
   */
  WPLF_Form = WPLF_Form
  WPLF_Tabs = WPLF_Tabs
  api: Client = api

  /**
   * Initialize all forms on the page, attaching them to this class.
   */
  initialize(): void {
    Array.from(document.querySelectorAll<HTMLElement>('form.wplf')).map(
      (form) => {
        this.attach(form)
      }
    )
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

import { WPLF_Editor } from './wplf-editor'
import { WPLF_Settings } from './wplf-settings'
import { WPLF_Addons } from './wplf-addons'
import { WPLF_Tabs } from './wplf-tabs'
import { WPLF_Manager } from './wplf-manager'

/**
 * Our "router" for running scripts on spesific pages in the admin.
 *
 * In theory, third parties may attach their code here with some black magic, but it's certainly not supported. File an issue if you want some changes here.
 */
export class WPLF_Admin {
  editor?: WPLF_Editor
  addons?: WPLF_Addons
  settings?: WPLF_Settings
  tabs: WPLF_Tabs[]

  constructor(manager: WPLF_Manager) {
    this.tabs = Array.from(document.querySelectorAll('.wplf-tabs')).map(
      (el) => {
        return new WPLF_Tabs(el)
      }
    )

    // Init stuff based on what page we're on
    const classList = document.body.classList

    if (
      classList.contains('post-type-libreform') &&
      (classList.contains('post-php') || classList.contains('post-new-php'))
    ) {
      // In editor page
      this.editor = new WPLF_Editor(manager)
    } else if (classList.contains('libreform_page_wplfSettings')) {
      // In settings page
      this.settings = new WPLF_Settings(manager)
    } else if (classList.contains('libreform_page_wplfAddons')) {
      // In addons page
      this.addons = new WPLF_Addons(manager)
    }
  }

  getEditor() {
    return this.editor
  }

  getAddons() {
    return this.addons
  }

  getSettings() {
    return this.settings
  }

  getTabs() {
    return this.tabs
  }
}

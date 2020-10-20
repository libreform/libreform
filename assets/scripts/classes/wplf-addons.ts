import { WPLF_Manager } from './wplf-manager'

export class WPLF_Addons {
  constructor(manager: WPLF_Manager) {
    const root = document.querySelector('.wplf-plugins')

    if (root) {
      // Tabs have already been init when this module is activated. No need to do that here.
      // const tabs = new WPLF_Tabs(root)
    }
  }
}

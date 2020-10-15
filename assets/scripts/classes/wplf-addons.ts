import WPLF from './wplf'
import WPLF_Tabs from './wplf-tabs'

export default class WPLF_Addons {
  constructor(wplfInstance: WPLF) {
    const root = document.querySelector('.wplf-plugins')

    if (root) {
      // Tabs have already been init when this module is activated. No need to do that here.
      // const tabs = new WPLF_Tabs(root)
    }
  }
}

import { WPLF_Manager } from './classes/wplf-manager'
import { WPLF_Tabs } from './classes/wplf-tabs'
import { WPLF_Form } from './classes/wplf-form'
import { Client, instance as api } from './classes/wplf-api'

import { WPLF_Frontend } from './types'

import '../styles/wplf-frontend.scss'

/**
 * This file is built into an UMD bundle. The default export will
 * be exposed under window.WPLF, if the resulting file is loaded via
 * <script> tag.
 *
 * If using ES modules (like this file), it can be imported as follows;
 *
 * import WPLF from '@libreform/libreform'
 */
export default ((): WPLF_Frontend => ({
  api,
  manager: new WPLF_Manager(),
  WPLF_Tabs,
  WPLF_Form,
}))()

import { WPLF_Admin } from './classes/wplf-admin';
import { WPLF_Manager } from './classes/wplf-manager';
import { WPLF_Tabs } from './classes/wplf-tabs';
import { WPLF_Form } from './classes/wplf-form';
import '../styles/wplf-admin.scss';
declare const _default: {
    api: import("./classes/wplf-api").Client;
    manager: WPLF_Manager;
    admin: WPLF_Admin;
    WPLF_Tabs: typeof WPLF_Tabs;
    WPLF_Form: typeof WPLF_Form;
};
/**
 * This file is built into an UMD bundle. The default export will
 * be exposed under window.WPLF, if the resulting file is loaded via
 * <script> tag.
 *
 * The resulting file is designed to be used inside /wp-admin only, although it is available as a module, do not try to import it outside.
 *
 * As this module assigns itself to window.WPLF, DO NOT load wplf-frontend.js at the same time to avoid having a very bad day.
 */
export default _default;

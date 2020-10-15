import WPLF_Editor from './wplf-editor';
import WPLF_Settings from './wplf-settings';
import WPLF_Addons from './wplf-addons';
import WPLF_Tabs from './wplf-tabs';
import WPLF from './wplf';
/**
 * Our "router" for running scripts on spesific pages in the admin.
 *
 * In theory, third parties may attach their code here with some black magic, but it's certainly not supported. File an issue if you want some changes here.
 */
export default class WPLF_Admin {
    editor?: WPLF_Editor;
    addons?: WPLF_Addons;
    settings?: WPLF_Settings;
    tabs: WPLF_Tabs[];
    constructor(wplfInstance: WPLF);
    getEditor(): WPLF_Editor | undefined;
    getAddons(): WPLF_Addons | undefined;
    getSettings(): WPLF_Settings | undefined;
    getTabs(): WPLF_Tabs[];
}

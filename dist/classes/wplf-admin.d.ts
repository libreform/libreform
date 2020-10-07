import WPLF_Editor from './wplf-editor';
import WPLF_Settings from './wplf-settings';
import WPLF_Addons from './wplf-addons';
import WPLF_Tabs from './wplf-tabs';
import WPLF from './wplf';
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

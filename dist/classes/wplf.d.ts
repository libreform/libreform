import { WPLF_Form } from './wplf-form';
import { List } from '../types';
import WPLF_Tabs from './wplf-tabs';
import { Client } from './wplf-api';
export default class WPLF {
    forms: List<WPLF_Form>;
    constructor();
    WPLF_Form: typeof WPLF_Form;
    WPLF_Tabs: typeof WPLF_Tabs;
    api: Client;
    initialize(): void;
    findFormsById(id: number): WPLF_Form[];
    findFormsBySlug(slug: string): WPLF_Form[];
    attach(x: HTMLElement | WPLF_Form): WPLF_Form;
    detach(wplfForm: WPLF_Form): boolean;
}

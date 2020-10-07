import { WPLF_Form } from './wplf-form';
import { List } from '../types';
import WPLF_Tabs from './wplf-tabs';
export default class WPLF {
    forms: List<WPLF_Form>;
    constructor();
    Form: typeof WPLF_Form;
    Tabs: typeof WPLF_Tabs;
    initialize(): void;
    findFormsById(id: number): WPLF_Form[];
    findFormsBySlug(slug: string): WPLF_Form[];
    attach(x: Element | WPLF_Form): WPLF_Form;
    detach(wplfForm: WPLF_Form): boolean;
}

import { WPLF_Form } from './wplf-form';
import { List } from '../types';
export declare class WPLF_Manager {
    forms: List<WPLF_Form>;
    constructor();
    /**
     * Initialize all forms on the page, attaching them to this class.
     */
    initialize(): void;
    findFormsById(id: number): WPLF_Form[];
    findFormsBySlug(slug: string): WPLF_Form[];
    attach(x: HTMLElement | WPLF_Form): WPLF_Form;
    detach(wplfForm: WPLF_Form): boolean;
}

import { Field, List, WPLF_EditorState } from '../types';
import WPLF from './wplf';
import { WPLF_Form } from './wplf-form';
export default class WPLF_Editor {
    wplf: WPLF;
    state: WPLF_EditorState;
    formInstance: WPLF_Form | null;
    inputs: List<Element>;
    previewEl: HTMLElement;
    publishButton: Element;
    fieldTemplate: Element;
    contentEditor: any;
    successMessageEditor: any;
    constructor(wplfInstance: WPLF);
    setState(fn?: (currentState: WPLF_EditorState) => Partial<WPLF_EditorState>): void;
    getState(): WPLF_EditorState;
    writeState(): void;
    afterStateChange(): void;
    /**
     * Disable bunch of things and remove the submit button,
     * backend will handle it if necessary but it's not pretty.
     * Backend should also print a notice above the form.
     */
    tryToPreventEdit(): void;
    handleContentChange(editor: string | any): Promise<void>;
    updatePreview(content: string): Promise<void>;
    getDuplicateNames(names: string[]): string[];
    createFieldElement(field: Field, errorMessage?: string): Element;
    updateFormFieldsFromPreview(): Promise<void>;
    removeProblematicAttributesFromPreview(): Promise<void>;
}

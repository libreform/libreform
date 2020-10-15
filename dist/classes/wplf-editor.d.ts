import { Field, List, WPLF_EditorState } from '../types';
import WPLF from './wplf';
import { WPLF_Form } from './wplf-form';
/**
 * A hot mess. Wraps everything in post.php together.
 *
 * Some things are rendered with React components, but mostly it's vanilla with questionable typesafety.
 */
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
     *
     * Uses jQuery because it's there and TS is tedious for this kind of things.
     */
    tryToPreventEdit(): void;
    /**
     * When the content changes, trigger preview refresh and update fields.
     *
     * `editor` is a CodeMirror instance (represented as any because I'm lazy) OR string.
     *
     * CodeMirror isn't initialised when the form is in readonly mode, but the preview must work for other things to work.
     */
    handleContentChange(editor: string | any): Promise<void>;
    /**
     * Request new HTML from the server and render it.
     *
     * Waits one tick before completing so the next function is ready to read the DOM.
     */
    updatePreview(content: string): Promise<void>;
    getDuplicateNames(names: string[]): string[];
    /**
     * Create a new element based on this.fieldTemplate.
     */
    createFieldElement(field: Field, errorMessage?: string): Element;
    /**
     * Parse the preview and update the fields based on it.
     *
     * Waits one tick before completing so the next function is ready to read the DOM.
     */
    updateFormFieldsFromPreview(): Promise<void>;
    /**
     * Some attributes clash with the post save process, preventing it entirely.
     *
     * Waits one tick before completing so the next function is ready to read the DOM.
     */
    removeProblematicAttributesFromPreview(): Promise<void>;
}

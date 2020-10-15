import WPLF_Tabs from './wplf-tabs';
import { SubmitState, SubmitHandler, FormCallback, List } from '../types';
/**
 * Each instance represents one form. Most class methods can be chained:
 * form.removeCallback('default', 'beforeSend').addCallback('mycallback', 'beforeSend', ...)
 */
export declare class WPLF_Form {
    form: HTMLElement;
    id: number;
    slug: string;
    submitState: SubmitState;
    submitHandler: SubmitHandler | null;
    callbacks: {
        beforeSend: List<FormCallback>;
        success: List<FormCallback>;
        error: List<FormCallback>;
    };
    tabs: WPLF_Tabs[];
    key: string;
    /**
     * Initialize the form
     */
    constructor(element: HTMLElement);
    /**
     * Expose the default callbacks for 3rd party usage
     */
    getDefaultCallbacks(): {
        beforeSend: {
            default: (wplfForm: WPLF_Form, params: List<any>) => void;
        };
        success: {
            default: (wplfForm: WPLF_Form, params: List<any>) => void;
            clearOnSuccess: (wplfForm: WPLF_Form, params: List<any>) => void;
        };
        error: {
            default: (wplfForm: WPLF_Form, params: List<any>) => void;
        };
    };
    /**
     * Add a callback that runs when certain "events" happen
     */
    addCallback(name: string, type: string, callback: FormCallback): this;
    /**
     * Prevent a callback from running
     */
    removeCallback(name: string, type: string): this;
    /**
     * Run a callback, passing any provided params to it.
     *
     * Params can be pretty much anything depending on the context, so typing them is impossible.
     */
    private runCallback;
    /**
     * Attach previously created submitHandler to the form
     */
    attachSubmitHandler(): this;
    /**
     * Removes submit handler from the form, but keeps it in memory.
     */
    removeSubmitHandler(): this;
    createSubmitHandler(handler?: SubmitHandler): this;
}

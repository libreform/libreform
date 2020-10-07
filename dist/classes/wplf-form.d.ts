import WPLF_Tabs from './wplf-tabs';
import { SubmitState, SubmitHandler, FormCallback, List } from '../types';
export declare class WPLF_Form {
    form: Element;
    submitState: SubmitState;
    submitHandler: SubmitHandler;
    callbacks: {
        beforeSend: List<FormCallback>;
        success: List<FormCallback>;
        error: List<FormCallback>;
    };
    tabs: WPLF_Tabs[];
    key: string;
    constructor(element: Element);
    addCallback(name: string, type: string, callback: FormCallback): this;
    removeCallback(name: string, type: string): this;
    runCallback(type: string, params?: List<any>): void;
    attachSubmitHandler(): this;
    /**
     * Removes submit handler from the form, but keeps it in memory.
     */
    removeSubmitHandler(): this;
    createSubmitHandler(handler?: SubmitHandler): SubmitHandler;
    send(): Promise<import("../types").ApiResponse>;
}

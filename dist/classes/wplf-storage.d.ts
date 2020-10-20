/**
 * localStorage wrapper, prefixes automatically.
 */
declare class WPLF_Storage {
    prefix: string;
    constructor(prefix?: string);
    get(key: string, defaultValue: any): any;
    set(key: string, value: any): boolean;
}
declare const instance: WPLF_Storage;
export { WPLF_Storage, instance };

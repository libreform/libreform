declare class WPLF_Storage {
    prefix: string;
    constructor(prefix?: string);
    get(key: string, defaultValue: any): any;
    set(key: string, value: any): boolean;
}
declare const _default: WPLF_Storage;
export default _default;

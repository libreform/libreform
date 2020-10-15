import { RawApiResponse } from '../types';
declare type AbortablePromise<T> = Promise<T> & {
    abort: () => void;
};
/**
 * Abortable fetch-wrapper for making api calls to the WPLF api.
 */
export declare function request<T>(target: string, options?: Partial<RequestInit>): AbortablePromise<RawApiResponse<T>>;
export {};

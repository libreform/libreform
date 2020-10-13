import { RawApiResponse } from '../types';
declare type AbortablePromise<T> = Promise<T> & {
    abort: () => void;
};
export declare function request<T>(target: string, options?: Partial<RequestInit>): AbortablePromise<RawApiResponse<T>>;
export {};

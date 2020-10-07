import { List, ApiResponse, ApiResponseKind } from '../types';
declare const _default: () => {
    controller: null;
    signal: null;
    getSignal(): AbortSignal | null;
    abort(): void;
    request(target: string, options: List<string | number | boolean | FormData | null> | undefined, responseKind: ApiResponseKind): Promise<ApiResponse>;
};
export default _default;

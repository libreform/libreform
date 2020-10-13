import { RenderFormApiResponse, GetSubmissionsResponse, ResponseType } from '../types';
declare class Client {
    requestRender(id: string | number, content: string): Promise<RenderFormApiResponse>;
    requestSubmissions(id: string | number, page: number, limit: number): Promise<import("../types").ApiResponse<ResponseType.GetSubmissions, GetSubmissionsResponse>>;
}
declare const _default: Client;
export default _default;

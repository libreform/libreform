import { RenderFormApiResponse } from '../types';
declare class Client {
    requestRender(id: string | number, content: string): Promise<RenderFormApiResponse>;
}
declare const _default: Client;
export default _default;

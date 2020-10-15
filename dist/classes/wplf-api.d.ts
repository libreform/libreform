import { RenderFormApiResponse, GetSubmissionsResponse, ResponseType, SubmissionResponse, GetFormApiResponse, GetFormsApiResponse, DeleteSubmissionsResponse } from '../types';
export declare class Client {
    requestRender(id: string | number, content: string): Promise<RenderFormApiResponse>;
    requestForm(idOrSlug: string | number): Promise<GetFormApiResponse>;
    requestForms(page: number): Promise<GetFormsApiResponse>;
    deleteSubmissions(formIdOrSlug: string | number, submissionUuids: string[]): Promise<import("../types").ApiResponse<ResponseType.DeleteSubmissions, DeleteSubmissionsResponse>>;
    requestSubmissions(formIdOrSlug: string | number, page: number, limit: number): Promise<import("../types").ApiResponse<ResponseType.GetSubmissions, GetSubmissionsResponse>>;
    requestSubmission(formIdOrSlug: string | number, submissionUuid: string): Promise<import("../types").ApiResponse<ResponseType.GetSubmission, GetSubmissionsResponse>>;
    sendSubmission(body: FormData): Promise<import("../types").ApiResponse<ResponseType.SubmitForm, SubmissionResponse>>;
}
declare const _default: Client;
export default _default;

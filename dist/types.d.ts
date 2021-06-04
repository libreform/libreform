import { WPLF_Form } from './classes/wplf-form';
import { WPLF_Manager } from './classes/wplf-manager';
import { WPLF_Tabs as _WPLF_Tabs } from './classes/wplf-tabs';
import { Client } from './classes/wplf-api';
export { WPLF_Form } from './classes/wplf-form';
export interface WPLF_Frontend {
    api: Client;
    manager: WPLF_Manager;
    WPLF_Tabs: typeof _WPLF_Tabs;
    WPLF_Form: typeof WPLF_Form;
}
export declare enum SubmitState {
    Unsubmitted = 0,
    Submitting = 1,
    Success = 2,
    Error = 3
}
export declare type SubmitHandler = (event: Event) => Promise<void>;
export declare type FormCallback = (wplfForm: WPLF_Form, params: Record<string, any>) => void;
export interface WPLF_Tabs {
    remember: boolean;
    activeTab: null | string;
    root: HTMLElement;
    name: string;
}
export interface Form {
    ID: number;
    addToMediaLibrary: boolean;
    additionalFields: string[];
    content: string;
    fields: Field[];
    historyFields: Record<string, Field[]>;
    postContainsFileInputs: boolean;
    title: string;
    versionCreatedAt: string;
}
export interface Submission {
    ID: number;
    title: string;
    uuid: string;
    referrer: Record<string, any>;
    historyId: number;
    createdAt: string;
    modifiedAt: string;
    entries: Record<string, any>;
    formFields: Record<string, Field>;
    meta: Record<string, any>;
}
export interface Field {
    name: string;
    type: string;
    required: boolean;
    multiple: boolean;
    attributes: Record<string, string>;
}
export interface WPLF_EditorState {
    historyFields: Record<string, Field>;
    fields: Record<string, Field>;
    additionalFields: string[];
    newFields: Field[];
    deletedFields: Field[];
    allowSave: boolean;
    [k: string]: any;
}
export interface WPLF_LocalizeData {
    backendUrl: string;
    assetsDir: string;
    fetchCredentials: 'same-origin' | 'include' | 'omit';
    i18n: Record<string, string>;
    adminUrl?: string;
    lang?: string;
    post?: {
        ID: string;
        [k: string]: any;
    };
    requestHeaders: {
        'X-WP-Nonce': string;
        [k: string]: any;
    };
    codeMirror: any;
    settings: {
        autoinit: boolean;
        debugLevel: string;
        hasUnfilteredHtml: boolean;
        parseLibreformsShortcodeInRestApi: boolean;
    };
}
export declare enum ResponseType {
    GetForm = "getForm",
    GetForms = "getForms",
    GetSubmissions = "getSubmissions",
    GetSubmission = "getSubmission",
    DeleteSubmissions = "deleteSubmissions",
    RenderForm = "renderForm",
    SubmitForm = "submitForm",
    ApiError = "apiError"
}
export interface RawApiResponse<DataType> {
    headers: Headers;
    status: number;
    statusText: string;
    url: string;
    ok: boolean;
    data: DataType;
}
export declare type ApiResponse<TKind extends ResponseType, TData> = RawApiResponse<TData> & {
    kind: TKind;
};
export interface ApiError {
    error: string;
    data: string;
}
export declare type GetFormResponse = ApiError | {
    data: {
        raw: Form;
        rendered: string;
    };
};
export declare type GetFormApiResponse = ApiResponse<ResponseType.GetForm, GetFormResponse>;
export declare type GetFormsResponse = ApiError | {
    data: Form[];
};
export declare type GetFormsApiResponse = ApiResponse<ResponseType.GetForms, GetFormsResponse>;
export declare type GetSubmissionsResponse = ApiError | {
    data: Submission[];
};
export declare type GetSubmissionsApiResponse = ApiResponse<ResponseType.GetSubmissions, GetSubmissionsResponse>;
export declare type GetSubmissionResponse = ApiError | {
    data: Submission[];
};
export declare type GetSubmissionApiResponse = ApiResponse<ResponseType.GetSubmission, GetSubmissionsResponse>;
export declare type DeleteSubmissionsResponse = ApiError | {
    data: Record<string, string>;
};
export declare type DeleteSubmissionsApiResponse = ApiResponse<ResponseType.DeleteSubmissions, DeleteSubmissionsResponse>;
export declare type RenderResponse = ApiError | {
    data: {
        html: string;
        form: Form;
    };
};
export declare type RenderFormApiResponse = ApiResponse<ResponseType.RenderForm, RenderResponse>;
export declare type SubmissionResponse = ApiError | {
    submission: Submission;
    message: string;
};
export declare type SubmitFormApiResponse = ApiResponse<ResponseType.SubmitForm, SubmissionResponse>;
export declare type ApiErrorApiResponse = ApiResponse<ResponseType.ApiError, ApiError>;
export declare type GenericApiResponse = GetFormApiResponse | GetFormsApiResponse | GetSubmissionsApiResponse | GetSubmissionApiResponse | RenderFormApiResponse | DeleteSubmissionsApiResponse | SubmitFormApiResponse | ApiErrorApiResponse;
declare global {
    interface Window {
        wplfData: WPLF_LocalizeData;
        jQuery: any;
        wp: any;
    }
}

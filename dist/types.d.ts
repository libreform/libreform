import { WPLF_Form } from './classes/wplf-form';
export declare enum SubmitState {
    Unsubmitted = 0,
    Submitting = 1,
    Success = 2,
    Error = 3
}
export declare type SubmitHandler = (event: Event) => Promise<void>;
export declare type FormCallback = (wplfForm: WPLF_Form, params: List<any>) => void;
export interface WPLF_Tabs {
    remember: boolean;
    activeTab: null | string;
    root: HTMLElement;
    name: string;
}
export interface List<T> {
    [k: string]: T;
}
export declare enum ApiResponseKind {
    Submission = "submission",
    Render = "render",
    GetSubmissions = "getsubmissions"
}
export interface RawApiResponse {
    headers: Headers;
    status: number;
    statusText: string;
    url: string;
    ok: boolean;
    data: any;
}
export interface SubmitApiResponse extends RawApiResponse {
    kind: ApiResponseKind.Submission;
    data: ApiError | {
        submission: {
            ID: number;
        };
    };
}
export interface GetSubmissionsApiResponse extends RawApiResponse {
    kind: ApiResponseKind.GetSubmissions;
    data: ApiError | Submission[];
}
export interface RenderApiResponse extends RawApiResponse {
    kind: ApiResponseKind.Render;
    data: ApiError | {
        html: string;
        form: {
            ID: number;
            postContainsFileInputs: true;
            title: string;
        };
    };
}
export interface ApiError {
    error: string;
    data: string;
}
export declare type ApiResponse = SubmitApiResponse | GetSubmissionsApiResponse | RenderApiResponse;
export interface Form {
    ID: number;
    addToMediaLibrary: boolean;
    additionalFields: string[];
    content: string;
    fields: Field[];
    historyFields: List<Field[]>;
    postContainsFileInputs: boolean;
    title: string;
    versionCreatedAt: string;
}
export interface Submission {
    ID: number;
    uuid: string;
    referrer: List<any>;
    historyId: number;
    createdAt: string;
    modifiedAt: string;
    entries: List<any>;
    formFields: List<Field>;
    meta: List<any>;
}
export interface Field {
    name: string;
    type: string;
    required: boolean;
    multiple: boolean;
}
export interface WPLF_EditorState {
    historyFields: List<Field>;
    fields: List<Field>;
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
    i18n: List<string>;
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
declare global {
    interface Window {
        wplfData: WPLF_LocalizeData;
        jQuery: any;
        wp: any;
    }
}

import { WPLF_Form } from './classes/wplf-form'
import { WPLF_Manager } from './classes/wplf-manager'
import { WPLF_Tabs as _WPLF_Tabs } from './classes/wplf-tabs'
import { Client, instance as api } from './classes/wplf-api'

export { WPLF_Form } from './classes/wplf-form'

export interface WPLF_Frontend {
  api: Client
  manager: WPLF_Manager
  WPLF_Tabs: typeof _WPLF_Tabs
  WPLF_Form: typeof WPLF_Form
}

export enum SubmitState {
  Unsubmitted,
  Submitting,
  Success,
  Error,
}
export type SubmitHandler = (event: Event) => Promise<void>
export type FormCallback = (
  wplfForm: WPLF_Form,
  params: Record<string, any>
) => void

export interface WPLF_Tabs {
  remember: boolean
  activeTab: null | string
  root: HTMLElement
  name: string
}

// export interface Record<string, T> {
//   [k: string]: T
// }

export interface Form {
  ID: number
  addToMediaLibrary: boolean
  additionalFields: string[]
  content: string
  fields: Field[]
  historyFields: Record<string, Field[]>
  postContainsFileInputs: boolean
  title: string
  versionCreatedAt: string
}

export interface Submission {
  ID: number
  title: string
  uuid: string
  referrer: Record<string, any>
  historyId: number
  createdAt: string
  modifiedAt: string
  entries: Record<string, any>
  formFields: Record<string, Field>
  meta: Record<string, any>
}

export interface Field {
  name: string
  type: string
  required: boolean
  multiple: boolean
  attributes: Record<string, string>
}

export interface WPLF_EditorState {
  historyFields: Record<string, Field>
  // fields: Field[]
  fields: Record<string, Field>
  additionalFields: string[]
  newFields: Field[]
  deletedFields: Field[]
  allowSave: boolean
  [k: string]: any // and anything else your heart may desire
}

export interface WPLF_LocalizeData {
  backendUrl: string
  assetsDir: string
  // fetchCredentials: string
  fetchCredentials: 'same-origin' | 'include' | 'omit'
  i18n: Record<string, string>
  adminUrl?: string
  lang?: string
  post?: { ID: string; [k: string]: any } // We only care about the ID
  requestHeaders: {
    'X-WP-Nonce': string
    [k: string]: any
  }
  codeMirror: any
  settings: {
    autoinit: boolean
    debugLevel: string
    hasUnfilteredHtml: boolean
    parseLibreformsShortcodeInRestApi: boolean
  }
}

export enum ResponseType {
  GetForm = 'getForm',
  GetForms = 'getForms',
  GetSubmissions = 'getSubmissions',
  GetSubmission = 'getSubmission',
  DeleteSubmissions = 'deleteSubmissions',
  RenderForm = 'renderForm',
  SubmitForm = 'submitForm',
  ApiError = 'apiError',
}

export interface RawApiResponse<DataType> {
  headers: Headers
  status: number
  statusText: string
  url: string
  ok: boolean
  data: DataType
}

export type ApiResponse<TKind extends ResponseType, TData> =
  RawApiResponse<TData> & { kind: TKind }

export interface ApiError {
  error: string
  data: string
}

export type GetFormResponse =
  | ApiError
  | { data: { raw: Form; rendered: string } }
export type GetFormApiResponse = ApiResponse<
  ResponseType.GetForm,
  GetFormResponse
>
export type GetFormsResponse = ApiError | { data: Form[] }
export type GetFormsApiResponse = ApiResponse<
  ResponseType.GetForms,
  GetFormsResponse
>

export type GetSubmissionsResponse = ApiError | { data: Submission[] }
export type GetSubmissionsApiResponse = ApiResponse<
  ResponseType.GetSubmissions,
  GetSubmissionsResponse
>

export type GetSubmissionResponse = ApiError | { data: Submission[] }
export type GetSubmissionApiResponse = ApiResponse<
  ResponseType.GetSubmission,
  GetSubmissionsResponse
>

export type DeleteSubmissionsResponse =
  | ApiError
  | { data: Record<string, string> }
export type DeleteSubmissionsApiResponse = ApiResponse<
  ResponseType.DeleteSubmissions,
  DeleteSubmissionsResponse
>

export type RenderResponse =
  | ApiError
  | {
      data: {
        html: string
        form: Form
      }
    }

export type RenderFormApiResponse = ApiResponse<
  ResponseType.RenderForm,
  RenderResponse
>

export type SubmissionResponse =
  | ApiError
  | {
      submission: Submission
      message: string
    }

export type SubmitFormApiResponse = ApiResponse<
  ResponseType.SubmitForm,
  SubmissionResponse
>

export type ApiErrorApiResponse = ApiResponse<ResponseType.ApiError, ApiError>

export type GenericApiResponse =
  | GetFormApiResponse
  | GetFormsApiResponse
  | GetSubmissionsApiResponse
  | GetSubmissionApiResponse
  | RenderFormApiResponse
  | DeleteSubmissionsApiResponse
  | SubmitFormApiResponse
  | ApiErrorApiResponse

declare global {
  interface Window {
    // React: React // @types/react has it handled already
    // WPLF: WPLF // We're not going to use our own library from window

    // This comes from WordPress
    wplfData: WPLF_LocalizeData

    // Some WP globals that we don't have types for
    jQuery: any // WP uses 1.12.4, there's no @types/jquery@1.12.4
    // _: any, // @types/underscore@1.8.3
    wp: any
  }
}

import React from 'react'
import { WPLF_Form } from './classes/wplf-form'

export enum SubmitState {
  Unsubmitted,
  Submitting,
  Success,
  Error,
}
export type SubmitHandler = (event: Event) => Promise<void>
export type FormCallback = (wplfForm: WPLF_Form, params: List<any>) => void

export interface WPLF_Tabs {
  remember: boolean
  activeTab: null | string
  root: HTMLElement
  name: string
}

export interface List<T> {
  [k: string]: T
}

export enum ResponseType {
  GetForm = 'getForm',
  GetSubmissions = 'getSubmissions',
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

export type ApiResponse<TKind extends ResponseType, TData> = RawApiResponse<
  TData
> & { kind: TKind }

export interface ApiError {
  error: string
  data: string
}

export type GetFormResponse = ApiError | Form
export type GetFormApiResponse = ApiResponse<
  ResponseType.GetForm,
  GetFormResponse
>

export type GetSubmissionsResponse = ApiError | Submission[]
export type GetSubmissionsApiResponse = ApiResponse<
  ResponseType.GetSubmissions,
  GetSubmissionsResponse
>

export type RenderResponse = ApiError | { html: string; form: Form }

export type RenderFormApiResponse = ApiResponse<
  ResponseType.RenderForm,
  RenderResponse
>
// export type RenderFormApiResponse = ApiResponse<
//   ResponseType.RenderForm,
//   ApiError | { html: string; form: Form }
// >

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
  | GetSubmissionsApiResponse
  | RenderFormApiResponse
  | SubmitFormApiResponse
  | ApiErrorApiResponse

export interface Form {
  ID: number
  addToMediaLibrary: boolean
  additionalFields: string[]
  content: string
  fields: Field[]
  historyFields: List<Field[]>
  postContainsFileInputs: boolean
  title: string
  versionCreatedAt: string
}

export interface Submission {
  ID: number
  title: string
  uuid: string
  referrer: List<any>
  historyId: number
  createdAt: string
  modifiedAt: string
  entries: List<any>
  formFields: List<Field>
  meta: List<any>
}

export interface Field {
  name: string
  type: string
  required: boolean
  multiple: boolean
  attributes: List<string>
}

export interface WPLF_EditorState {
  historyFields: List<Field>
  // fields: Field[]
  fields: List<Field>
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
  i18n: List<string>
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

window['React'] = React

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

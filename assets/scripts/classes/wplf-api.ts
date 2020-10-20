import { request } from '../lib/create-request'
import globalData from '../lib/global-data'
import {
  RenderFormApiResponse,
  RenderResponse,
  GetSubmissionsResponse,
  GetSubmissionResponse,
  ResponseType,
  GetSubmissionsApiResponse,
  GetSubmissionApiResponse,
  SubmissionResponse,
  SubmitFormApiResponse,
  GetFormApiResponse,
  GetFormResponse,
  GetFormsApiResponse,
  GetFormsResponse,
  DeleteSubmissionsResponse,
  DeleteSubmissionsApiResponse,
} from '../types'

class Client {
  async requestRender(
    id: string | number,
    content: string
  ): Promise<RenderFormApiResponse> {
    const body = new FormData()
    body.append('content', content)
    body.append('form', id.toString())
    if (globalData.lang) {
      body.append('lang', globalData.lang)
    }

    const response = await request<RenderResponse>('/renderForm', {
      method: 'POST',
      body,
    })

    if (!response.ok) {
      // throw new Error('Unable to render form')
    }

    const x: RenderFormApiResponse = {
      ...response,
      kind: ResponseType.RenderForm,
    }

    return x
  }

  async requestForm(idOrSlug: string | number): Promise<GetFormApiResponse> {
    let lang = ''

    if (globalData.lang) {
      lang = `&lang=${globalData.lang}`
    }

    const url = `/getForm?form=${idOrSlug}${lang}`
    const response = await request<GetFormResponse>(url, {
      method: 'GET',
    })

    if (!response.ok) {
      // throw new Error('Unable to get form')
    }

    const x: GetFormApiResponse = {
      ...response,
      kind: ResponseType.GetForm,
    }

    return x
  }

  async requestForms(page: number): Promise<GetFormsApiResponse> {
    let lang = ''

    if (globalData.lang) {
      lang = `&lang=${globalData.lang}`
    }

    const url = `/getForms?page=${page}${lang}`
    const response = await request<GetFormsResponse>(url, {
      method: 'GET',
    })

    if (!response.ok) {
      // throw new Error('Unable to get forms')
    }

    const x: GetFormsApiResponse = {
      ...response,
      kind: ResponseType.GetForms,
    }

    return x
  }

  async deleteSubmissions(
    formIdOrSlug: string | number,
    submissionUuids: string[]
  ) {
    const response = await request<DeleteSubmissionsResponse>(
      `/deleteSubmissions`,
      {
        method: 'DELETE',
        headers: {
          ...globalData.requestHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formIdOrSlug,
          submissionUuids,
        }),
      }
    )

    if (!response.ok) {
      // throw new Error('Unable to delete submissions')
    }

    const x: DeleteSubmissionsApiResponse = {
      ...response,
      kind: ResponseType.DeleteSubmissions,
    }

    return x
  }

  async requestSubmissions(
    formIdOrSlug: string | number,
    page: number,
    limit: number
  ) {
    const response = await request<GetSubmissionsResponse>(
      `/getSubmissions?form=${formIdOrSlug}&page=${page}&limit=${limit}`,
      {
        method: 'GET',
      }
    )

    if (!response.ok) {
      // throw new Error('Unable to get submissions')
    }

    const x: GetSubmissionsApiResponse = {
      ...response,
      kind: ResponseType.GetSubmissions,
    }

    return x
  }

  async requestSubmission(
    formIdOrSlug: string | number,
    submissionUuid: string
  ) {
    const response = await request<GetSubmissionResponse>(
      `/getSubmission?form=${formIdOrSlug}&uuid=${submissionUuid}`,
      {
        method: 'GET',
      }
    )

    if (!response.ok) {
      // throw new Error('Unable to get submission')
    }

    const x: GetSubmissionApiResponse = {
      ...response,
      kind: ResponseType.GetSubmission,
    }

    return x
  }

  async sendSubmission(body: FormData) {
    const response = await request<SubmissionResponse>(`/submitForm`, {
      method: 'POST',
      body,
    })

    if (!response.ok) {
      // throw new Error('Unable to send submission')
    }

    const x: SubmitFormApiResponse = {
      ...response,
      kind: ResponseType.SubmitForm,
    }

    return x
  }
}

const instance = new Client()

export { Client, instance }
// export default instance

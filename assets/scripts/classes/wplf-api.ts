import { request } from '../lib/create-request'
import globalData from '../lib/global-data'
import {
  RenderFormApiResponse,
  RenderResponse,
  GetSubmissionsResponse,
  ResponseType,
  GetSubmissionsApiResponse,
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
      throw new Error('Unable to render form')
    }

    const x: RenderFormApiResponse = {
      ...response,
      kind: ResponseType.RenderForm,
    }

    return x
  }

  async requestSubmissions(id: string | number, page: number, limit: number) {
    const response = await request<GetSubmissionsResponse>(
      `/getSubmissions?form=${id}&page=${page}&limit=${limit}`,
      {
        method: 'GET',
      }
    )

    if (!response.ok) {
      throw new Error('Unable to get submissions')
    }

    const x: GetSubmissionsApiResponse = {
      ...response,
      kind: ResponseType.GetSubmissions,
    }

    return x
  }
}

export default new Client()

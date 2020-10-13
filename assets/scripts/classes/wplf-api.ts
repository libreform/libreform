import { request } from '../lib/create-request'
import globalData from '../lib/global-data'
import {
  ApiResponse,
  RenderFormApiResponse,
  RenderResponse,
  ResponseType,
} from '../types'
import { WPLF_Form } from './wplf-form'

class Client {
  // checkResponse(response: RawApiResponse) {
  //   const { ok, status } = response

  //   if (!ok) {
  //     return false
  //   }

  //   return true
  // }

  // parseResponse<ToType extends keyof ApiResponseKind>(response: RawApiResponse) : ToType {
  //   return {
  //     ...response,
  //     kind: ApiResponseKind[ToType],
  //   }
  // }

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

    return {
      ...response,
      kind: ResponseType.RenderForm,
    }
  }

  // async requestSubmissions(
  // form
}

export default new Client()

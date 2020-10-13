import AbortController from 'abort-controller'
import globalData from './global-data'
import { List, RawApiResponse, ApiResponse, GenericApiResponse } from '../types'

type AbortablePromise<T> = Promise<T> & { abort: () => void }

export function request<T>(
  target: string,
  options: Partial<RequestInit> = {}
): AbortablePromise<RawApiResponse<T>> {
  let controller: AbortController | null

  const abort = () => {
    if (controller && controller.abort) {
      controller.abort()
    }
  }

  const promise = (async (): Promise<RawApiResponse<T>> => {
    try {
      controller = new AbortController()

      const res = await fetch(globalData.backendUrl + target, {
        method: 'GET',
        signal: controller.signal,
        credentials: globalData.fetchCredentials || 'same-origin',
        headers: globalData.requestHeaders || {},
        ...options,
      })
      const { headers, status, statusText, url, ok } = res
      const data = await res.json()
      controller = null

      return {
        headers,
        status,
        statusText,
        url,
        ok,
        data,
      }
    } catch (e) {
      controller = null

      if (e.name !== 'AbortError') {
        throw e
      }
      return e
    }
  })()

  return Object.assign(promise, { abort })
}

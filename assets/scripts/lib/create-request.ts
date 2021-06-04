import AbortController from 'abort-controller'
import globalData from './global-data'
import { RawApiResponse, ApiResponse, GenericApiResponse } from '../types'

type AbortablePromise<T> = Promise<T> & { abort: () => void }

/**
 * Abortable fetch-wrapper for making api calls to the WPLF api.
 */
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
        // Abort shouldn't throw an error, since it's always an intended operation.
        throw e
      }

      return e
    }
  })()

  return Object.assign(promise, { abort })
}

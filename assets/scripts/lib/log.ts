import globalData from './global-data'

const { debugLevel } = globalData.settings

// Assign the methods we're going to use into a variable, fallbacking to empty functions if they do not exist.
const console = window.console || { log() {}, error() {} }

const notice = (message: string, ...params: any[]) =>
  debugLevel === 'all' && console.log(`WPLF: ${message}`, params)
const error = (message: string, ...params: any[]) =>
  debugLevel !== 'none' && console.error(`WPLF error: ${message}`, params)

/**
 * Fancy console wrapper that lets us keep optional logging on.
 */
export default {
  notice,
  error,
}

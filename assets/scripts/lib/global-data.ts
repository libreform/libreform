import { WPLF_LocalizeData } from '../types'

/**
 * Take data from wp_localize_script and assign it into a module.
 */
export default ((window): WPLF_LocalizeData =>
  Object.assign(
    {
      backendUrl: null,
      fetchCredentials: 'same-origin',
      requestHeaders: {
        'X-WP-Nonce': null,
      },
      assetsDir: null,
      settings: {
        autoinit: true,
        parseLibreformShortcodeInRestApi: true,
        hasUnfilteredHtml: true,
        debugLevel: 'all',
      },
      post: null,
      i18n: {
        // This list is bound to change so frequently that there's no point in including any defaults.
      },
    },
    window.wplfData
  ))(window)

/**
 * Type guard.
 */
function isElementish(e: object | null | undefined): e is Element {
  return e ? 'getAttribute' in e && 'tagName' in e : false
}

export default isElementish

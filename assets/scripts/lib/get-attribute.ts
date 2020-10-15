/**
 * el.getAttribute() with default
 */
export default function getAttribute(
  el: Element,
  attribute: string,
  defaultVal: string | null = null
) {
  const x = el.getAttribute(attribute)

  if (x === null) {
    return defaultVal
  }

  return x
}

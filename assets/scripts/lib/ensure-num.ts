/**
 * parseInt/parseFloat wrapper. TypeScript will complain if you try to
 * parseInt a number, this will not.
 */
export default function ensureNum(x: string | number, float: boolean = false) {
  if (typeof x === 'number') {
    return x
  } else {
    return float ? parseFloat(x) : parseInt(x, 10)
  }
}

/**
 * Check if string value is numeric.
 */
export function isNum(x: string) {
  if (x && x.length > 0 && x.match(/^[0-9]*$/)) {
    return true
  }

  return false
}

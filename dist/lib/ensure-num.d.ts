/**
 * parseInt/parseFloat wrapper. TypeScript will complain if you try to
 * parseInt a number, this will not.
 */
export default function ensureNum(x: string | number, float?: boolean): number;
/**
 * Check if string value is numeric.
 */
export declare function isNum(x: string): boolean;

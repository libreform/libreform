/**
 * Trying to read the DOM immediately after setting it does not work.
 * Trying on next tick does.
 */
export declare const waitForNextTick: () => Promise<number>;
export declare const wait: (ms?: number) => Promise<number>;

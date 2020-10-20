export declare class WPLF_Tabs {
    remember: boolean;
    activeTab: string;
    root: Element;
    name: string;
    constructor(element: Element);
    handleClick: (e: Event) => void;
    /**
     * Attach event listeners and ensure the current tab is visible.
     * Call after adding a tab dynamically.
     */
    refresh(): void;
    /**
     * Values are not cached as they are practically free to recompute, but
     * might become a memory leak if stored.
     */
    getTabs(): Element[];
    /**
     * See getTabs()
     */
    getHandles(): Element[];
    /**
     * Goes through tabs and handles, hiding those which do not match and showing those which do.
     */
    switchTab(name: string): void;
}

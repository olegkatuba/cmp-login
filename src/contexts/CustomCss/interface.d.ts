export interface CustomCssRules {
    [directive: string]: string;
}
export interface ElementCss {
    selector: CSS_SELECTOR;
    default?: CustomCssRules;
    desktop?: CustomCssRules;
    ie?: CustomCssRules;
    landscape?: CustomCssRules;
    mobile?: CustomCssRules;
    mobileSmall?: CustomCssRules;
    mobileExtraSmall?: CustomCssRules;
    portrait?: CustomCssRules;
}
export interface AllowedCss {
    directives: string[];
    selector: CSS_SELECTOR;
}
export interface CustomCssProviderProps {
    css: ElementCss[];
    setCss: (value: string) => void;
}
export interface UseCustomCssReturn {
    rules: CustomCssRules | null;
    setCss: (value: string) => void;
}
export interface GenericStyle {
    [key: string]: string;
}
export declare enum CSS_SELECTOR {
    BUTTONS = ".uc-action-button",
    BUTTONS_CONTAINER = ".uc-buttons-container",
    LANGUAGE_SWITCH = ".uc-language-switch",
    LAYER = ".uc-layer",
    LINKS = ".uc-links",
    MESSAGE = ".uc-message",
    TAB_BUTTON = ".uc-tab-button",
    TAB_CONTENT = ".uc-tab-content",
    TITLE = ".uc-title"
}
export declare enum CSS_MEDIA_SIZE {
    DEFAULT = "default",
    DESKTOP = "desktop",
    IE = "ie",
    LANDSCAPE = "landscape",
    PORTRAIT = "portrait",
    MOBILE = "mobile",
    MOBILE_S = "mobileSmall",
    MOBILE_XS = "mobileExtraSmall"
}

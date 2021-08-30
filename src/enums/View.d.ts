export declare enum ANALYTICS_SRC {
    API = "UC_UI_API",
    FIRST_LAYER = "FIRST_LAYER",
    PRIVACY_BUTTON = "PRIVACY_BUTTON",
    SECOND_LAYER = "SECOND_LAYER"
}
export declare enum ANALYTICS_TYPE {
    ACCEPT_ALL = "ACCEPT_ALL",
    CMP_SHOWN = "CMP_SHOWN",
    COOKIE_POLICY_LINK = "COOKIE_POLICY_LINK",
    DENY_ALL = "DENY_ALL",
    IMPRINT_LINK = "IMPRINT_LINK",
    MORE_INFORMATION_LINK = "MORE_INFORMATION_LINK",
    PRIVACY_POLICY_LINK = "PRIVACY_POLICY_LINK",
    SAVE = "SAVE"
}
export declare enum VIEW {
    FIRST_LAYER = "FIRST_LAYER",
    NONE = "NONE",
    PRIVACY_BUTTON = "PRIVACY_BUTTON",
    SECOND_LAYER = "SECOND_LAYER"
}
export declare enum GLOBAL_EVENTS {
    ANALYTICS = "UC_UI_CMP_EVENT",
    INITIALIZED = "UC_UI_INITIALIZED",
    VIEW_CHANGED = "UC_UI_VIEW_CHANGED"
}
export declare enum ERROR_MESSAGES {
    SERVICE_MISSING_ID = "Usercentrics: service ID is missing",
    DUPLICATED_SCRIPT = "Usercentrics: duplicated script tag",
    TCF_NOT_ENABLED = "Usercentrics: TCF is not enabled",
    CLIENT_CONFIG_NOT_AVAILABLE = "AMP clientConfig is not available"
}

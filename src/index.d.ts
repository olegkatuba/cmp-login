import { DATA_ATTRIBUTES, UC_UI_GLOBAL_NAMESPACE } from './constants';
import { BaseService, Service, Settings, TCFVendor, UserCountryData, UserSessionData } from '@usercentrics/cmp-browser-sdk';
interface GlobalUC {
    acceptAllConsents: () => Promise<void> | null;
    acceptService: (serviceId: string) => Promise<void>;
    areAllConsentsAccepted: () => boolean;
    clearStorage: () => Promise<void>;
    closeCMP: () => Promise<void>;
    denyAllConsents: () => Promise<void> | null;
    denyAndCloseCcpa: () => Promise<void>;
    enableScriptsForServicesWithConsent: () => void;
    getActiveLanguage: () => string;
    getServices: () => Service[];
    getServicesBaseInfo: () => BaseService[];
    getServicesFullInfo: () => Promise<Service[]>;
    getSettings: () => Settings;
    getTCFVendors: () => TCFVendor[] | undefined;
    isInitialized: () => boolean;
    rejectService: (serviceId: string) => Promise<void>;
    restartCMP: () => Promise<void>;
    showFirstLayer: () => Promise<void>;
    showSecondLayer: (scrollToServiceVendorId?: string | number) => Promise<void>;
    updateLanguage: (language: string) => Promise<void>;
}
declare global {
    interface Window {
        __webpack_nonce__: string;
        UC_UI_IS_RENDERED: boolean;
        UC_UI_USER_COUNTRY_DATA: UserCountryData;
        UC_UI_USER_SESSION_DATA: UserSessionData;
        UC_UI_SUPPRESS_CMP_DISPLAY: boolean;
        [UC_UI_GLOBAL_NAMESPACE]?: GlobalUC;
        [DATA_ATTRIBUTES.SETTINGS_ID]: string;
        [DATA_ATTRIBUTES.TCF_ENABLED]: boolean;
        [DATA_ATTRIBUTES.AMP_ENABLED]: boolean;
        [DATA_ATTRIBUTES.LANGUAGE]: string;
    }
}
export declare function renderUI(): Promise<void>;
export {};

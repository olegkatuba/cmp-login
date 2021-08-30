import { Service, TCFData, TCFUserDecisions, UserDecision } from '@usercentrics/cmp-browser-sdk';
export declare type ScrollToId = string | number;
declare type ServiceUserDecision = Pick<Service, 'id' | 'consent'>;
/**
 * Returns user decisions based on the categories
 * @param newCategories the new categories
 * before EUD-1079-amp-reject fix: (newCategories: Category[], oldCategories: Category[])
 */
export declare const getUserDecision: <T extends {
    services: ServiceUserDecision[];
}>(newCategories: T[]) => UserDecision[];
export declare const nullishOperation: <T>(element: T | null | undefined, altElement: T) => T;
/**
 * Returns TCF user decisions based on TCF data
 * @param tcfData the tcf data
 */
export declare const getTCFUserDecision: (tcfData: TCFData) => TCFUserDecisions;
/**
 * Map the choices of the current UI state to the new (translated) categories/services.
 * @param newCategories the new categories
 * @param oldCategories the old caterogies
 */
export declare const getCurrentUiCategoriesChoices: <T extends {
    services: ServiceUserDecision[];
    slug: string;
}>(newCategories: T[], oldCategories: T[]) => T[];
export {};

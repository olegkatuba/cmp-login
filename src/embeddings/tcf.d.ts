import { BaseCategory, Service, TCFData, TCFUISettings } from '@usercentrics/cmp-browser-sdk';
/**
 * Searches the current DOM for elements with the 'uc-embed-tcf' class and embeds the specified data inside these containers.
 * @param tcfData The data source for all TCF vendors and TCF purposes that may be embedded.
 * @param nonIabVendors The data source for all the services that are not in iab aka DPS that may be embedded.
 * @param nonIabPurposes The data source for all the purposes that are not in iab aka Categories that may be embedded.
 * @param uiSettings TCFUISettings object that contains the labels
 * @param containers DOM elements with the 'uc-embed-tcf' class
 */
export declare const embedTCF: (tcfData: TCFData, nonIabVendors: Service[], nonIabPurposes: BaseCategory[], uiSettings: TCFUISettings, containers: Element[]) => void;

import { Content, GDPREmbedOptions, TCFEmbedOptions } from './interfaces';
import { CookieInformationLabels, Service, TCFUISettings, TCFVendor } from '@usercentrics/cmp-browser-sdk';
import { JSX } from 'preact';
export declare const MAX_LIST_SIZE_IN_SUBLIST = 5;
/**
 * Extract options from the attributes of an HTML element.
 * @param container HTML Element.
 * @param servicesLabel Label for styled services.
 */
export declare const extractGdprEmbedOptions: (container: Element, servicesLabel: string) => GDPREmbedOptions;
/**
 * Extract options from the attributes of an HTML element.
 * @param container HTML Element that holds the attributes.
 * @param uiSettings TCFUISettings object that contains the labels
 */
export declare const extractTcfEmbedOptions: (container: Element, { labels, secondLayer }: TCFUISettings) => TCFEmbedOptions;
/**
 * Remove all children from an HTML Element.
 * @param container An HTML Element.
 */
export declare const reset: (container: Element) => void;
/**
 * Create a new HTMl Element with the specified tag, className and content and returns it.
 * @param tag The type of the newly created HTML Element.
 * @param className The class name of the newly created HTML Element.
 * @param attributes A key/value pair of attributes to apply.
 * @param content Optional. Child elements for the newly created element
 * @param useUcStyling idicates whether the predifined styling should be used.
 */
export declare const createHTMLElement: <T extends HTMLElement>(tag: string, className?: string | null | undefined, attributes?: JSX.HTMLAttributes<EventTarget>[] | undefined, content?: Content, useUcStyling?: boolean) => T;
/**
 * Create a new HTMl Header with the specified content and className and returns it.
 * @param headline the header text
 * @param isTCF indicates whether the current variant is TCF
 * @param useUcStyling idicates whether the predifined styling should be used
 * @param nonTcfClassName the class name to be used for non-tcf variants
 */
export declare const getTitle: (headline: string, isTCF: boolean, useUcStyling: boolean, nonTcfClassName?: string | null | undefined) => HTMLElement;
/**
 * Embeds a Text element into a given HTML container.
 * @param container An HTML Element to embed the text element into.
 * @param isTCF indicates whether the current variant is TCF
 * @param useUcStyling idicates whether the predifined styling should be used
 * @param descriptions multiple descriptions added line by line. Added after the headline
 * @param headline optional headline of the section.
 * @param nonTcfClassName the class name to be used for non-tcf variants
 */
export declare const embedText: (container: Element | Node, isTCF: boolean, useUcStyling: boolean, descriptions: string[], headline?: string | undefined, nonTcfClassName?: string | undefined) => void;
/**
 * Embeds a Link element into a given HTML container.
 * @param container An HTML Element to embed the link element into.
 * @param isTCF indicates whether the current variant is TCF
 * @param useUcStyling idicates whether the predifined styling should be used
 * @param link The link to be embedded.
 * @param linkText The Text to be displayed for the link.
 * @param headline The headline of the link.
 * @param description optional description. Added after the headline
 * @param nonTcfClassName the class name to be used for non-tcf variants
 */
export declare const embedLink: (container: Element | Node, isTCF: boolean, useUcStyling: boolean, link: string, linkText: string, headline: string, description?: string | null | undefined, nonTcfClassName?: string | undefined) => void;
/**
 * Embeds a series of items into a given HTML container.
 * @param container An HTML Element to embed the series into.
 * @param isTCF indicates whether the current variant is TCF
 * @param useUcStyling idicates whether the predifined styling should be used
 * @param items The items of the series to be embedded.
 * @param headline The headline of the series to be embedded.
 * @param description optional description. Added after the headline
 * @param nonTcfClassName the class name to be used for non-tcf variants
 */
export declare const embedSeries: (container: Element | Node, isTCF: boolean, useUcStyling: boolean, items: string[], headline: string, description?: string | null | undefined, nonTcfClassName?: string | null | undefined) => void;
/**
 * Creates a new expandable Element (button style) and adds it to the container.
 * @param fragment A fragment to be used as a lightweigh version of the Document
 * @param collapseTitle The Title of the Button.
 * @param content The content of the expandable section
 * @param useUcStyling indicates whether the predifined styling should be used
 * @param showToggle indicates whether service should show consent toggle (optional)
 * @param service the GDPR service data to be used if showToggle is true
 */
export declare const embedExpandableItem: (fragment: DocumentFragment, collapseTitle: string, content: string | Element | Node, useUcStyling: boolean, showToggle?: boolean | undefined, service?: Service | undefined) => void;
/**
 * Embeds storage information into a given HTML container.
 * @param container An HTML Element to embed the series into.
 * @param service The service/vendor containing the storage information
 * @param labels Cookie Information labels.
 * @param isTCF indicates whether the current variant is TCF
 * @param useUcStyling idicates whether the predifined styling should be used
 * @param nonTcfClassName the class name to be used for non-tcf variants
 */
export declare const embedStorageInfoSection: (container: Element | Node, service: Service | TCFVendor, labels: CookieInformationLabels, isTCF: boolean, useUcStyling: boolean, nonTcfClassName?: string | undefined) => void;
/**
 * Embeds Stored Information into a given HTML container.
 * @param container The container that the newly created Expandable Element is embedded in.
 * @param service The service/vendor containing the storage information
 * @param labels The cookie Information labels.
 * @param isTCF indicates whether the current variant is TCF
 * @param useUcStyling idicates whether the predifined styling should be used.
 * @param nonTcfClassName the class name to be used for non-tcf variants
 */
export declare const embedStoredInfoSection: (container: Element | Node, service: Service | TCFVendor, labels: CookieInformationLabels, isTCF: boolean, useUcStyling: boolean, nonTcfClassName?: string | undefined) => void;

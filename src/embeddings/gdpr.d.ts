import { DefaultUILabels, Service } from '@usercentrics/cmp-browser-sdk';
import { UICategory } from '../contexts/CategoryContext';
/**
 * Searches the current DOM for elements with the 'uc-embed' class and embeds the specified data inside these containers.
 * @param categories The data source for all the categories that may be embedded.
 * @param services The data source for all the services that may be embedded.
 * @param labels The labels associated with the embeddings.
 * @param servicesLabel Label for styled services header.
 * @param containers DOM elements with the 'uc-embed' class
 */
export declare const embedGDPR: (categories: UICategory[], services: Service[], labels: DefaultUILabels, servicesLabel: string, containers: Element[]) => void;

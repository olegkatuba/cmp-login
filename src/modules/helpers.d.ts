import { ANALYTICS_TYPE, LAYER_PLACEMENT, VIEW } from '../enums';
import { FIRST_LAYER_VARIANT, InitOptions, SECOND_LAYER_VARIANT, TRACKING_EVENT_TYPE, TrackEventParameters } from '@usercentrics/cmp-browser-sdk';
declare type InitParameters = {
    options: InitOptions;
    settingsId: string;
};
declare type FormattedLegalDescription = {
    bulletPoints: string[];
    title: string;
};
declare type AMPClientConfig = {
    id: string;
    baseHref: string | '';
};
export declare const getAmpClientConfig: () => AMPClientConfig | null;
export declare const getInitParameters: () => InitParameters;
export declare const getFormatedLegalDescription: (legalDescription: string) => FormattedLegalDescription[] | string;
export declare const isMailAddress: (mailString: string) => boolean;
export declare const mapUIVariantToLayer: (layerVariant: FIRST_LAYER_VARIANT | SECOND_LAYER_VARIANT | null, testIds: {
    firstLayerWall: string;
    firstLayerBanner: string;
    secondLayer: string;
}) => {
    layerPlacement: LAYER_PLACEMENT | null;
    testId: string;
};
export declare const isEqual: (object1: Record<string, any>, object2: Record<string, any>) => boolean;
export declare const dispatchAnalyticsEvent: (view: VIEW, type: ANALYTICS_TYPE) => void;
export declare const setTrackingPixel: (eventType: TRACKING_EVENT_TYPE, UCSetTrackingPixel: (trackEventParameters: TrackEventParameters) => void, interactionAnalyticsEnabled: boolean) => void;
/**
 * Remove all children from an HTML Element.
 * @param container An HTML Element.
 */
export declare const reset: (container: Element) => void;
export {};

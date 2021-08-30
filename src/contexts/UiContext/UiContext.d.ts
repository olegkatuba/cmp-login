import { FunctionalComponent } from 'preact';
import { ScrollToId } from '../../App.helpers';
import { StateUpdater } from 'preact/hooks';
import { TAB_VIEW, VIEW } from '../../enums';
import Usercentrics, { FIRST_LAYER_VARIANT, SECOND_LAYER_VARIANT, UI_VARIANT } from '@usercentrics/cmp-browser-sdk';
export interface UiData {
    baseHref: string;
    clearCategoryPurposeScrollToId: () => void;
    clearServiceVendorScrollToId: () => void;
    closeView: () => void;
    firstLayerVariant: FIRST_LAYER_VARIANT | null;
    footerHeight: number;
    isAmpEnabled: boolean;
    isInFullScreen: boolean;
    currentLanguage: string;
    previousLanguage: string;
    previousView: VIEW;
    scrollToIdTabViewCategoryPurpose: ScrollToId;
    scrollToIdTabViewServiceVendors: ScrollToId;
    scrollToSubServices: boolean;
    secondLayerVariant: SECOND_LAYER_VARIANT | null;
    setBaseHref: StateUpdater<string>;
    setFirstLayerVariant: StateUpdater<FIRST_LAYER_VARIANT | null>;
    setFooterHeight: StateUpdater<number>;
    setIsAmpEnabled: StateUpdater<boolean>;
    setIsInFullScreen: StateUpdater<boolean>;
    setLanguage: (language: string) => void;
    setScrollToIdTabViewCategoryPurpose: StateUpdater<ScrollToId>;
    setScrollToIdTabViewServiceVendor: StateUpdater<ScrollToId>;
    setScrollToSubServices: StateUpdater<boolean>;
    setSecondLayerVariant: StateUpdater<SECOND_LAYER_VARIANT | null>;
    setTabView: StateUpdater<TAB_VIEW>;
    settingsCloseView: VIEW;
    setUiVariant: StateUpdater<UI_VARIANT | null>;
    setView: (view: VIEW) => Promise<void>;
    tabView: TAB_VIEW;
    uiVariant: UI_VARIANT | null;
    updateView: (newView: VIEW) => Promise<void>;
    view: VIEW;
    restoreUserSession: (controllerId: string) => Promise<void>;
    controllerId: string;
}
interface Props {
    UC: Usercentrics;
}
export declare const UiContextProvider: FunctionalComponent<Props>;
export declare const useUiContext: () => UiData;
export {};

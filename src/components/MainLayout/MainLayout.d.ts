import { LAYER_PLACEMENT } from '../../enums';
import { FunctionalComponent } from 'preact';
import { ButtonsContainerProps } from '../ButtonsContainer/interface';
import { SECOND_LAYER_SIDE } from '@usercentrics/cmp-browser-sdk';
export declare type LayerSettings = {
    isOverlayEnabled: boolean;
    layerPlacement: LAYER_PLACEMENT | null;
    minVerticalScrollerHeight?: number;
    placeLinksInFooter?: boolean;
    showBorderBottom?: boolean;
    side?: SECOND_LAYER_SIDE;
    testId: string;
    withFadingBottom?: boolean;
    withFadingTop?: boolean;
    withInitialHeight?: boolean;
};
declare type Props = {
    customActions?: {
        ariaLabel: string;
        label: string;
        onClick: () => void;
    }[];
    footer: {
        buttons: ButtonsContainerProps;
        showBorderBeforeFooter?: boolean;
    };
    header: {
        description: string;
        labelShowMore?: string;
        maxDescriptionHeight?: number;
        showCloseButton?: boolean;
        shortDescription?: string;
        showFullScreenButton?: boolean;
        showLanguageSelector?: boolean;
        showMoreEnabled?: boolean;
        title: string;
        functions: {
            onClose?: () => void;
            onFullScreenAmp?: () => void;
            onLanguageChange: (selectedLanguage: string) => void;
        };
        enableHTMLTextFormatting: boolean;
    };
    layerSettings: LayerSettings;
    useBackgroundColor: boolean;
};
declare const MainLayout: FunctionalComponent<Props>;
export default MainLayout;

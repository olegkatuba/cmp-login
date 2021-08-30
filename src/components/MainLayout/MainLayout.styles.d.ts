import { LAYER_PLACEMENT } from '../../enums';
import { SECOND_LAYER_SIDE } from '@usercentrics/cmp-browser-sdk';
declare type BannerContainerProps = {
    showBorderBottom: boolean;
    layerPlacement: LAYER_PLACEMENT | null;
    isAmpEnabled: boolean;
};
export declare const BannerContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BannerContainerProps, never>;
declare type BannerWrapperProps = {
    showBorderBottom: boolean;
    layerPlacement: LAYER_PLACEMENT | null;
    isAmpEnabled: boolean;
};
export declare const BannerWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BannerWrapperProps, never>;
declare type CenterContainerProps = {
    isAmpEnabled: boolean;
    showBorderBottom: boolean;
    withInitialHeight: boolean;
};
declare type FadingContainerProps = {
    useBackgroundColor: boolean;
};
export declare const CenterContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CenterContainerProps, never>;
export declare const RowContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ColumnContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const FadingContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FadingContainerProps, never>;
export declare const VerticalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HorizontalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const MobileContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const MobileScrollContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FadingContainerProps, never>;
declare type Props = {
    isMobile?: boolean;
    withFadingTop?: boolean;
    withFadingBottom?: boolean;
};
export declare const MobileFadingWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
declare type SideContainerProps = {
    showBorderBottom: boolean;
    side?: SECOND_LAYER_SIDE;
    privacyButtonPosition: string;
};
export declare const SideContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SideContainerProps, never>;
export declare const MainElementContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};

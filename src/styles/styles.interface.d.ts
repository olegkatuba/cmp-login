import { SECOND_LAYER_TRIGGER, UI_VARIANT } from '@usercentrics/cmp-browser-sdk';
export interface BreakpointsOptions {
    lg: number;
    md: number;
    sm: number;
    xl: number;
    xs: number;
    xxl: number;
    xxxl: number;
}
export interface UISizes {
    maxBannerWidth: number;
    maxSideAndCenterContainerWidth: number;
}
export interface Color {
    dark: string;
    default: string;
}
export interface ColorPalette {
    primary: Color;
    secondary: Color;
    tertiary: Color;
    quaternary: Color;
    neutral: Color;
}
export interface TextColorPalette {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
}
export interface TextSizePalette {
    large: string;
    medium: string;
    small: string;
    xsmall: string;
}
export interface TextWeight {
    light: number;
    regular: number;
    semiBold: number;
    bold: number;
}
export interface TypographyOptions {
    color: TextColorPalette;
    font: string;
    rtlEnabled: boolean;
    size: TextSizePalette;
    scaleFactor: number;
    weight: TextWeight;
}
export interface Size {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    xxxxl: string;
}
export interface Spacing {
    base: Omit<Size, 'xxxs'>;
    mobile: Omit<Size, 'xxxs'>;
}
export interface ButtonColor {
    bg: Color;
    text: Color;
}
export interface PrivacyButton {
    bg: Color;
    desktopSize: string;
    icon: string;
    mobileSize: string;
    text: Color;
}
export interface ButtonsTheme {
    accept: ButtonColor;
    borderRadius: string;
    deny: ButtonColor;
    more: ButtonColor;
    privacy: PrivacyButton;
    save: ButtonColor;
}
interface ToggleTheme {
    backgroundColor: string;
    iconColor: string;
}
export interface UITheme {
    buttons: ButtonsTheme;
    expandableLink: {
        color: string;
    };
    firstLayer: {
        secondLayerTrigger: SECOND_LAYER_TRIGGER;
    };
    layer: {
        backgroundColor: string;
        borderRadius: string;
        darkerBackgroundColor: string;
    };
    links: {
        fontColor: string;
        iconColor: string;
    };
    overlay: {
        color: string;
        opacity: number;
    };
    secondLayer: {
        content: {
            backgroundColor: string;
        };
        dividers: string;
    };
    tabs: {
        color: string;
    };
    text: {
        color: string;
    };
    toggle: {
        active: ToggleTheme;
        disabled: ToggleTheme;
        inactive: ToggleTheme;
    };
    useBackgroundShadow: boolean;
}
export interface Theme {
    ui: UITheme;
    color: ColorPalette;
    spacing: Spacing;
    typography: TypographyOptions;
    uiSizes: UISizes;
    uiVariant: UI_VARIANT;
}
export {};

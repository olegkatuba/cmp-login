import { AllowedCss, CSS_MEDIA_SIZE, CustomCssRules, ElementCss, GenericStyle } from './interface';
import { DeviceState } from '../../hooks';
export declare const getCssRules: (css: ElementCss[], selector: string, { isDesktop, isIE, isLandscape, isPortrait, isMobileMd, isMobileExtraSmall, isMobileSmall }: DeviceState) => CustomCssRules | null;
export declare const parseAllowedRules: (css: string, { directives }: AllowedCss) => GenericStyle | undefined;
export declare const getAllowedRulesBySelector: (selector: string) => {
    allowedCss: AllowedCss;
    media: CSS_MEDIA_SIZE;
} | null;
export declare const parseSelector: (value: string) => string;
export declare const parseCss: (value: string) => ElementCss[];

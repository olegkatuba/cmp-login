import { ButtonsTheme, Color, ColorPalette, TextColorPalette, Theme as ThemeProps, TypographyOptions, UISizes } from './styles.interface';
import { CSS_BORDER_TYPE, CSS_PROPERTY } from '../enums/Css';
import { CcpaUISettings, Customization, DefaultUISettings, TCFUISettings, UI_VARIANT } from '@usercentrics/cmp-browser-sdk';
import { FONT_WEIGHT_BOLD, FONT_WEIGHT_LIGHT, FONT_WEIGHT_REGULAR, FONT_WEIGHT_SEMI_BOLD } from './sc-vars';
export { CSS_BORDER_TYPE, CSS_PROPERTY };
export { Color, Theme } from './styles.interface';
export { breakpoints } from './sc-vars';
export { media } from './media';
export { FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR, FONT_WEIGHT_LIGHT, FONT_WEIGHT_SEMI_BOLD };
/**
 * This method will return the primary font color if it's contrast to the provided background color is deemed good
 * enough. If the contrast is deemed too bad, the quaternary font color will be returned.
 */
export declare function getHighContrastTextColor(backgroundColor: string, textColorPalette: TextColorPalette): string;
export declare const generateColor: (color: string) => Color;
/**
 * Get the right css style as a string based on RTL Enabled
 *
 */
export declare const getCssBasedOnRtl: (theme: ThemeProps, propertyType: CSS_PROPERTY, pxValue?: string | number | undefined, borderType?: CSS_BORDER_TYPE | undefined, color?: string | undefined) => string;
export declare const getTextColor: (defaultColor: string, colorPalette: TextColorPalette, color?: string | null | undefined) => Color;
export declare const generateButtonsTheme: ({ neutral, primary }: ColorPalette, { color: typographyColor }: TypographyOptions, customization?: Customization | undefined) => ButtonsTheme;
/**
 * This method creates a new variation of the LightTheme, based on the custom primary color, font-size and font-family
 * provided in the UI settings.
 */
export declare function generateTheme(configuration: CcpaUISettings | DefaultUISettings | TCFUISettings, rtlEnabled: boolean, uiVariant: UI_VARIANT, uiSizes?: UISizes): ThemeProps;
declare const LightTheme: ThemeProps;
export default LightTheme;

import { LogoPosition, UI_VARIANT } from '@usercentrics/cmp-browser-sdk';
import { DefaultTheme } from 'styled-components';
declare type HeaderWrapperProps = {
    noPadding?: boolean;
    uiVariant?: UI_VARIANT;
};
interface LogoProps {
    position: LogoPosition;
}
export declare const HeaderWrapper: import("styled-components").StyledComponent<"div", DefaultTheme, HeaderWrapperProps, never>;
export declare const HeaderContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const TopRow: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const handleNavPosition: (pos: LogoPosition, theme: DefaultTheme) => string;
export declare const OptionsContainer: import("styled-components").StyledComponent<"nav", DefaultTheme, LogoProps, never>;
interface ButtonProps {
    height: string;
}
export declare const Button: import("styled-components").StyledComponent<"button", DefaultTheme, ButtonProps, never>;
export declare const LogoContainer: import("styled-components").StyledComponent<"div", DefaultTheme, LogoProps, never>;
export declare const Logo: import("styled-components").StyledComponent<"img", DefaultTheme, LogoProps, never>;
export {};

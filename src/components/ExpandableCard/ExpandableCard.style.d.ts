import { ComponentChild, FunctionalComponent } from 'preact';
import { DefaultTheme } from 'styled-components';
export declare const Border: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
declare type ToggleProps = {
    hasToggle?: boolean;
    hideToggles?: boolean;
};
export declare const CardHeader: import("styled-components").StyledComponent<"div", DefaultTheme, ToggleProps, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"button", DefaultTheme, ToggleProps, never>;
declare type TitleProps = {
    useBoldTitle: boolean;
};
export declare const Title: import("styled-components").StyledComponent<"div", DefaultTheme, TitleProps, never>;
export declare const InitialText: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
declare type ColumnRightProps = {
    hideToggles?: boolean;
};
export declare const ColumnRight: import("styled-components").StyledComponent<"div", DefaultTheme, ColumnRightProps, never>;
export declare const Button: import("styled-components").StyledComponent<"button", DefaultTheme, ToggleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const UpArrow: import("styled-components").StyledComponent<"i", DefaultTheme, {}, never>;
export declare const DownArrow: import("styled-components").StyledComponent<"i", DefaultTheme, {}, never>;
export declare const ChildContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
declare type RowProps = {
    children: ComponentChild[];
    reverseDirection?: boolean;
};
export declare const Row: FunctionalComponent<RowProps>;
export {};

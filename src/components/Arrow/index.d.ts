export declare type ArrowDirection = 'left' | 'right' | 'top' | 'down';
export interface ArrowProps {
    color?: string;
    direction: ArrowDirection;
    size?: number;
    weight?: number;
}
export declare const Arrow: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, ArrowProps, never>;

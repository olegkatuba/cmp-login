/**
 * We should try to have as few media queries as possible in terms of maintainability of the responsive design
 * Let's try to do as much as possible with flex boxes
 */
export declare const media: {
    ie11: string;
    mobileLandscape: string;
    mobilePortrait: string;
    mobilePortraitXS: string;
};
export declare type MediaType = keyof typeof media;

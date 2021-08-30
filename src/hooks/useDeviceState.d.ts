export interface DeviceState {
    isDesktop: boolean;
    isIE: boolean;
    isLandscape: boolean;
    isMobile: boolean;
    isMobileExtraSmall: boolean;
    isMobileMd: boolean;
    isMobileSmall: boolean;
    isPortrait: boolean;
}
export declare const useDeviceState: () => DeviceState;

import { CookieInformationLabels, DeviceStorage } from '@usercentrics/cmp-browser-sdk';
import { FunctionalComponent } from 'preact';
interface Props {
    cookieInformationLabels: CookieInformationLabels;
    cookieMaxAgeSeconds: number | null;
    cookieRefresh: boolean | null;
    deviceStorage: DeviceStorage | null;
    deviceStorageDisclosureUrl: string | null;
    onToggleExpandable?: () => void;
    storageInfoAnchorLabel: string;
    usesCookies: boolean | null;
    usesNonCookieAccess: boolean | null;
    isNonIabVendor: boolean | null;
}
declare const StorageInfo: FunctionalComponent<Props>;
export default StorageInfo;

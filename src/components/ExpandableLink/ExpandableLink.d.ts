import { CookieInformationLabels, DeviceStorage } from '@usercentrics/cmp-browser-sdk';
import { FunctionalComponent } from 'preact';
declare type Props = {
    ariaLabel: string;
    deviceStorage: DeviceStorage | null;
    disclosureUrl: string | null;
    onToggleExpandable?: () => void;
    labels: CookieInformationLabels;
    isNonIabVendor: boolean | null;
};
declare const ExpandableLink: FunctionalComponent<Props>;
export default ExpandableLink;

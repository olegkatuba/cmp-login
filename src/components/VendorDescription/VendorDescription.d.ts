import { FunctionalComponent } from 'preact';
import { TCFUISettings, TCFVendor } from '@usercentrics/cmp-browser-sdk';
declare type Props = {
    onToggleExpandable: () => void;
    vendor: TCFVendor;
    ui: TCFUISettings;
};
declare const VendorDescription: FunctionalComponent<Props>;
export default VendorDescription;

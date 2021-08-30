import { TCFPurpose } from '@usercentrics/cmp-browser-sdk';
import { TCFState } from '../../contexts/TcfContext';
export declare type PurposeProps = {
    checked: boolean;
    legitimateInterestChecked: boolean;
    purpose: TCFPurpose;
    onPurposeConsentToggle: () => void;
    onPurposeLegitimateInterestToggle: () => void;
};
declare const MapPurposes: (props: TCFState) => PurposeProps[];
export default MapPurposes;

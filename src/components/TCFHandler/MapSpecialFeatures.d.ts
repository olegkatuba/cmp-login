import { TCFSpecialFeature } from '@usercentrics/cmp-browser-sdk';
import { TCFState } from '../../contexts/TcfContext';
export declare type SpecialFeatureProps = {
    checked: boolean;
    onSpecialFeatureToggle: () => void;
    specialFeature: TCFSpecialFeature;
};
declare const MapSpecialFeatures: (props: TCFState) => SpecialFeatureProps[];
export default MapSpecialFeatures;

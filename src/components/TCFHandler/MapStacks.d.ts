import { TCFStack } from '@usercentrics/cmp-browser-sdk';
import { TCFState } from '../../contexts/TcfContext';
export declare type StackProps = {
    checked: boolean;
    onStackConsentToggle: () => void;
    stack: TCFStack;
};
declare const MapStacks: (props: TCFState) => StackProps[];
export default MapStacks;

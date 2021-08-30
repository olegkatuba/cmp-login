import { FunctionalComponent } from 'preact';
import { TCFVendor } from '@usercentrics/cmp-browser-sdk';
import { ScrollToId } from '../../App.helpers';
declare type ItemProps = {
    index: number;
    id: number;
    scrollToId: ScrollToId;
    getItemSize: (index: number) => number;
    setItemSize: (index: number, height: number) => void;
    title: string;
    onToggleConsent: (id: number, checked: boolean) => void;
    onToggleLegInterestConsent: (id: number, checked: boolean) => void;
    onToggleAll: () => void;
    vendors: TCFVendor[];
};
declare const VirtualVendorItem: FunctionalComponent<ItemProps>;
export default VirtualVendorItem;

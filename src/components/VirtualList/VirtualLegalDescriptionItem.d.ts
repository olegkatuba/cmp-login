import { FunctionalComponent } from 'preact';
import { PurposeProps, SpecialFeatureProps, StackProps } from '../TCFHandler';
import { TCFFeature } from '@usercentrics/cmp-browser-sdk';
declare type Data = TCFFeature | PurposeProps | SpecialFeatureProps | StackProps;
interface ItemProps<T> {
    data: T[];
    index: number;
    id: number;
    getItemSize: (index: number) => number;
    setItemSize: (index: number, height: number) => void;
    testid: string;
    title?: string;
    useInlineToggle?: boolean;
    useFromStackOnly?: boolean;
}
declare const VirtualLegalDescriptionItem: FunctionalComponent<ItemProps<Data>>;
export default VirtualLegalDescriptionItem;

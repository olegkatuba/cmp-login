import { ItemStyle } from './TinyVirtualList';
interface IndexRatio {
    end: number;
    start: number;
}
export declare const getIndexesRatio: (...dataLength: number[]) => IndexRatio[];
export declare const getLengthWithExtra: <T, U, V>(extra: number, arr1: T[], arr2?: U[] | undefined, arr3?: V[] | undefined) => [number, number, number];
interface Styles {
    [key: string]: string | number;
}
export declare const getItemStyle: (style: ItemStyle) => Styles;
export {};

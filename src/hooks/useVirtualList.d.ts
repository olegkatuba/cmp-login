import { RefObject } from 'preact';
interface VirtualListItemSize {
    itemSize: number[];
    setItemSize: (index: number, size: number) => void;
    getItemSize: (index: number) => number;
}
export declare const useVirtualList: (itemCount: number, estimatedItemSize: number) => VirtualListItemSize;
interface VirtualListItemProps {
    index: number;
    itemRef: RefObject<HTMLDivElement>;
    getItemSize: (index: number) => number;
    setItemSize: (index: number, height: number) => void;
}
interface VirtualListItemReturn {
    updateComponentSize: () => void;
}
export declare const useVirtualListItem: ({ itemRef, index, getItemSize, setItemSize, }: VirtualListItemProps) => VirtualListItemReturn;
export {};

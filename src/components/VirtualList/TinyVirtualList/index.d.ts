import { ALIGNMENT, DIRECTION, SCROLL_CHANGE_REASON } from './constants';
import { Component, ComponentChild, h } from 'preact';
import SizeAndPositionManager, { ItemSize } from './SizeAndPositionManager';
import { CSSProperties } from 'styled-components';
export { DIRECTION as ScrollDirection } from './constants';
export declare type ItemPosition = 'absolute' | 'sticky';
export interface ItemStyle {
    position: ItemPosition;
    top?: number;
    left: number;
    width: string | number;
    height?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    zIndex?: number;
}
export interface ItemInfo {
    index: number;
    style: ItemStyle;
}
export interface RenderedRows {
    startIndex: number;
    stopIndex: number;
}
export interface Props {
    className?: string;
    estimatedItemSize?: number;
    height: number | string;
    itemCount: number;
    itemSize: ItemSize;
    overscanCount?: number;
    scrollOffset?: number;
    scrollToIndex?: number;
    scrollToAlignment?: ALIGNMENT;
    scrollDirection?: DIRECTION;
    stickyIndices?: number[];
    style?: CSSProperties;
    width?: number | string;
    onItemsRendered?({ startIndex, stopIndex }: RenderedRows): void;
    onScroll?(offset: number, event: Event): void;
    renderItem(itemInfo: ItemInfo): ComponentChild;
}
export interface State {
    offset: number;
    scrollChangeReason: SCROLL_CHANGE_REASON;
}
export default class VirtualList extends Component<Props, State> {
    static defaultProps: {
        overscanCount: number;
        scrollDirection: DIRECTION;
        tabIndex: number;
        width: string;
    };
    itemSizeGetter: (itemSize: Props['itemSize']) => (index: number) => number;
    sizeAndPositionManager: SizeAndPositionManager;
    readonly state: State;
    private rootNode;
    private styleCache;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentDidUpdate(_: Props, prevState: State): void;
    componentWillUnmount(): void;
    scrollTo(value: number): void;
    getOffsetForIndex(index: number, scrollToAlignment?: ALIGNMENT | undefined, itemCount?: number): number;
    recomputeSizes(startIndex?: number): void;
    render(): h.JSX.Element;
    private getRef;
    private handleScroll;
    private getNodeOffset;
    private getEstimatedItemSize;
    private getSize;
    private getStyle;
}

import { ScrollDirection, Props as VirtualListProps } from './TinyVirtualList';
interface Props extends Omit<VirtualListProps, 'height'> {
    isVisible: boolean;
    overscanCount?: number;
    scrollDirection?: ScrollDirection;
    scrollToIndex?: number;
}
declare const _default: import("preact").FunctionComponent<Props>;
export default _default;

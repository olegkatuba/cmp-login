import { h } from 'preact';
interface Props<T> {
    onChange: (selected: T) => void;
    items: SelectItem<T>[];
    ariaLabel?: string;
    defaultItem?: SelectItem<T>;
    id?: string;
    isExpandedOnInit?: boolean;
    maxHeight?: number;
    testIdContainer?: string;
    testIdMenu?: string;
    testIdMenuButton?: string;
}
declare type SelectItem<T> = {
    ariaLabel: string;
    displayName: string;
    value: T;
};
declare function Selector<T>({ onChange, items, ariaLabel, defaultItem, id, isExpandedOnInit, maxHeight, testIdContainer, testIdMenu, testIdMenuButton, }: Props<T>): h.JSX.Element;
declare namespace Selector {
    var defaultProps: {
        ariaLabel: null;
        defaultItem: null;
        id: string;
        isExpandedOnInit: boolean;
        maxHeight: number;
        testIdContainer: string;
        testIdMenu: string;
        testIdMenuButton: string;
    };
}
export default Selector;

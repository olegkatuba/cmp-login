import { FunctionalComponent } from 'preact';
import { CategoryProps } from '../CategoryHandler/MapCategories';
import { ScrollToId } from '../../App.helpers';
declare type ItemProps = {
    categories: CategoryProps[];
    getItemSize: (index: number) => number;
    hasTopSpace?: boolean;
    index: number;
    id: number;
    setItemSize: (index: number, height: number) => void;
    showServicesToggles: boolean;
    showToggles: boolean;
    title?: string;
    showOnlyConsentToggle?: boolean;
    scrollToId?: ScrollToId;
};
declare const VirtualCategoryItem: FunctionalComponent<ItemProps>;
export default VirtualCategoryItem;

import { StateUpdater } from 'preact/hooks';
import { UICategory, UIService } from '../../contexts/CategoryContext';
export declare type CategoryProps = {
    category: UICategory;
    checked: boolean;
    onCategoryToggle: () => void;
    onServiceToggle: (service: UIService) => void;
};
declare type Props = {
    categories: UICategory[];
    setCategories: StateUpdater<UICategory[]>;
};
declare const MapCategories: (props: Props) => CategoryProps[];
export default MapCategories;

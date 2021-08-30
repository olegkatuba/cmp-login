import { CategoryContextType, UICategory, UIService } from '../../contexts/CategoryContext';
import { StateUpdater } from 'preact/hooks';
export declare type ServiceProps = {
    categories: UICategory[];
    onServiceToggle: (checked: boolean, serviceId: string) => void;
    services: UIService[];
    setCategories: StateUpdater<UICategory[]>;
};
declare const MapServices: (props: CategoryContextType) => ServiceProps;
export default MapServices;

import { Category, Service } from '@usercentrics/cmp-browser-sdk';
export declare type CategoryProps = {
    category: Category;
    checked: boolean;
    onCategoryToggle: () => void;
    onServiceToggle: (service: Service) => void;
};
declare type Props = {
    isVisible: boolean;
    showServicesToggles: boolean;
};
declare const _default: import("preact").FunctionComponent<Props>;
export default _default;

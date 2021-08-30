import { BaseService } from '@usercentrics/cmp-browser-sdk';
import { UICategory } from '../../contexts/CategoryContext';
declare type Props = {
    category: UICategory;
    detailedCategoryToggleAriaLabel: string;
    onToggle: (service: BaseService) => void;
    service: BaseService;
    showServicesToggles: boolean;
};
declare const _default: import("preact").FunctionComponent<Props>;
export default _default;

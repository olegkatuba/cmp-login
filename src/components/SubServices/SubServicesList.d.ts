import { Service } from '@usercentrics/cmp-browser-sdk';
import { FunctionalComponent } from 'preact';
interface Props {
    subServicesReader: {
        read: () => Service[];
    };
    onOpenSubServiceDetail: (subService: Service) => void;
    onToggleExpandable?: () => void;
}
declare const SubServices: FunctionalComponent<Props>;
export default SubServices;

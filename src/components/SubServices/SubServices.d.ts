import { Service } from '@usercentrics/cmp-browser-sdk';
import { FunctionalComponent } from 'preact';
interface Props {
    fetchSubServices: () => Promise<Service[]>;
    onOpenSubServiceDetail: (subService: Service) => void;
    onToggleExpandable?: () => void;
    size: number;
}
declare const SubServices: FunctionalComponent<Props>;
export default SubServices;

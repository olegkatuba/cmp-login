import { Service } from '@usercentrics/cmp-browser-sdk';
import { FunctionalComponent } from 'preact';
interface Props {
    onCloseDetail: () => void;
    subService: Service;
}
declare const SubServiceDetail: FunctionalComponent<Props>;
export default SubServiceDetail;

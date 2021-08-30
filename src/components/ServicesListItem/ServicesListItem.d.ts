import { Service } from '@usercentrics/cmp-browser-sdk';
declare type Props = {
    onToggleExpandable?: () => void;
    onOpenSubServiceDetail?: (subService: Service) => void;
    service: Service;
};
declare const _default: import("preact").FunctionComponent<Props>;
export default _default;

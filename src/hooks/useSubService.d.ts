import { Service } from '@usercentrics/cmp-browser-sdk';
interface SubServiceHooks {
    selectedSubService: Service | null;
    onOpenSubServiceDetail: (subService: Service) => void;
    onCloseSubServiceDetail: () => void;
}
export declare const useSubService: () => SubServiceHooks;
export {};

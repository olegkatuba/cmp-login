import { FunctionalComponent } from 'preact';
import { StateUpdater } from 'preact/hooks';
import { TCFData } from '@usercentrics/cmp-browser-sdk';
export interface TCFState {
    setTcfData: StateUpdater<TCFData | null>;
    tcfData: TCFData | null;
}
export declare const TcfContextProvider: FunctionalComponent;
export declare const useTcfContext: () => TCFState;

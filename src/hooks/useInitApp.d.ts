import { StateUpdater } from 'preact/hooks';
import { Theme } from '../styles';
import Usercentrics, { InitialUIValues } from '@usercentrics/cmp-browser-sdk';
export declare const useInitApp: (UC: Usercentrics, initialUIValues: InitialUIValues, onThemeChange: StateUpdater<Theme>) => void;

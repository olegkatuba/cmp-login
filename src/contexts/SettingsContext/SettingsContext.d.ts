import { FunctionalComponent } from 'preact';
import { Settings } from '@usercentrics/cmp-browser-sdk';
declare type SettingsContextType = {
    loading: boolean;
    settings: Settings;
    setSettings: (settings: Settings) => void;
};
export declare const SettingsContextProvider: FunctionalComponent;
export declare const useSettingsContext: () => SettingsContextType;
export {};

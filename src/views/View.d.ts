import { FunctionalComponent } from 'preact';
import Usercentrics from '@usercentrics/cmp-browser-sdk';
declare type Props = {
    acceptAllDefault: () => Promise<void>;
    acceptAllTCF: () => Promise<void>;
    denyAllDefault: () => Promise<void>;
    denyAllTCF: () => Promise<void>;
    onClose: () => Promise<void>;
    onLanguageChange: (language: string) => Promise<void>;
    showSecondLayer: () => void;
    UC: Usercentrics;
};
declare const View: FunctionalComponent<Props>;
export default View;

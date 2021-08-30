import Usercentrics from '@usercentrics/cmp-browser-sdk';
interface Props {
    onClose: () => void;
    onCustomize: () => Promise<void>;
    onFullScreenAmp: () => void;
    onLanguageChange: (selectedLanguage: string) => void;
    onAcceptAll: () => Promise<void>;
    onDenyAll: () => Promise<void>;
    isAcceptDenyAllLoading: boolean;
    UC: Usercentrics;
}
declare const _default: import("preact").FunctionComponent<Props>;
export default _default;

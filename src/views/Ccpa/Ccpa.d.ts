import { StateUpdater } from 'preact/hooks';
import Usercentrics from '@usercentrics/cmp-browser-sdk';
interface Props {
    onClose: () => Promise<void>;
    onCustomize: () => Promise<void>;
    onLanguageChange: (selectedLanguage: string) => void;
    setToggleCcpaChecked: StateUpdater<boolean>;
    toggleCcpaChecked: boolean;
    UC: Usercentrics;
}
declare const _default: import("preact").FunctionComponent<Props>;
export default _default;

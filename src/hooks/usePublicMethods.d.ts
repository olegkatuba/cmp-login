import { StateUpdater } from 'preact/hooks';
import { Theme } from '../styles';
import Usercentrics, { InitialUIValues } from '@usercentrics/cmp-browser-sdk';
interface UsePublicMethodsProps {
    initialUIValues: InitialUIValues;
    onThemeChange: StateUpdater<Theme>;
    restartCMP: () => Promise<void>;
    UC: Usercentrics;
}
interface UsePublicMethodsReturn {
    acceptAllDefault: () => Promise<void>;
    acceptAllTCF: () => Promise<void>;
    denyAllDefault: () => Promise<void>;
    denyAllTCF: () => Promise<void>;
    closeCMP: () => Promise<void>;
    showSecondLayer: () => Promise<void>;
    updateLanguage: (lang: string) => Promise<void>;
}
/**
 * GLOBALLY EXPOSED METHODS
 * Offer global methods for plain HTML/JS websites. Those methods are added to the Browser's window object under the
 * UC_UI namespace. E.g. to open the secondLayer from the dev console you can type UC_UI.showSecondLayer().
 */
declare const usePublicMethods: ({ initialUIValues, onThemeChange, restartCMP, UC, }: UsePublicMethodsProps) => UsePublicMethodsReturn;
export default usePublicMethods;

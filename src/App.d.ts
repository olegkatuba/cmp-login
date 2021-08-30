import { FunctionalComponent } from 'preact';
import Usercentrics, { InitialUIValues } from '@usercentrics/cmp-browser-sdk';
import { StateUpdater } from 'preact/hooks';
import { Theme } from './styles';
declare type Props = {
    initialUIValues: InitialUIValues;
    onThemeChange: StateUpdater<Theme>;
    restartCMP: () => Promise<void>;
    UC: Usercentrics;
};
declare const App: FunctionalComponent<Props>;
export default App;

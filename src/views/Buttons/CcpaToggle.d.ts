import { FunctionalComponent } from 'preact';
interface Props {
    checked: boolean;
    disabled: boolean;
    onToggle: () => void;
    focusOnMount: boolean;
}
declare const CcpaToggle: FunctionalComponent<Props>;
export default CcpaToggle;

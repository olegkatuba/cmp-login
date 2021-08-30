import { FunctionalComponent } from 'preact';
export interface Props {
    ariaLabel?: string;
    checked?: boolean;
    id?: string | number;
    label?: string;
    disabled?: boolean;
    onToggle: (checked: boolean) => void;
    testid: string;
    size?: string;
    focusOnMount: boolean;
}
declare const CcpaToggle: FunctionalComponent<Props>;
export default CcpaToggle;

/// <reference types="react" />
import { FunctionalComponent } from 'preact';
declare type Props = {
    ariaLabel?: string;
    checked?: boolean;
    hideToggle?: boolean;
    id?: string | number;
    isDisabled?: boolean;
    label?: string | JSX.Element;
    onToggle: (checked: boolean) => void;
    size?: string;
};
declare const Toggle: FunctionalComponent<Props>;
export default Toggle;

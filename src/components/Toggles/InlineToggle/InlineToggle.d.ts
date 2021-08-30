import { FunctionalComponent } from 'preact';
declare type Props = {
    checked: boolean;
    id?: string | number;
    isDisabled?: boolean;
    label?: string;
    onToggle: () => void;
};
declare const InlineToggle: FunctionalComponent<Props>;
export default InlineToggle;

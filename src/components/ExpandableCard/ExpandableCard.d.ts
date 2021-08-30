/// <reference types="react" />
import { FunctionalComponent } from 'preact';
export declare type ToggleProps = {
    ariaLabel?: string;
    checked: boolean | null;
    defaultChecked?: boolean;
    id: string;
    isDisabled?: boolean;
    label?: string;
    onToggle: (checked: boolean) => void;
};
declare type Props = {
    title: string;
    description?: string;
    hideToggle: boolean;
    label?: JSX.Element;
    onToggleExpandable?: () => void;
    testid?: string;
    toggles?: ToggleProps[];
    type: string;
    useBoldTitle?: boolean;
    isExpandedOnInit?: boolean;
};
declare const ExpandableCard: FunctionalComponent<Props>;
export default ExpandableCard;

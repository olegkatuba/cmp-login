import { ButtonComponentProps } from '../Button/Button';
import { Props as CcpaToggleProps } from '../Toggles/CcpaToggle/CcpaToggle';
import { VNode } from 'preact';
export declare type ButtonElement = ButtonComponentProps | CcpaToggleProps;
export interface TCFButtons {
    AcceptAllButton: VNode<ButtonElement>;
    DenyAllButton?: VNode<ButtonElement>;
    SaveButton: VNode<ButtonElement>;
}
export interface CcpaButtons {
    CcpaButton: VNode<ButtonElement>;
    CcpaToggle: VNode<ButtonElement>;
}
export interface DefaultButtons {
    AcceptAllButton: VNode<ButtonElement>;
    DenyAllButton?: VNode<ButtonElement>;
    SaveButton?: VNode<ButtonElement>;
    MoreButton?: VNode<ButtonElement>;
}
export declare type ButtonsWrapperProps = {
    buttons?: VNode<ButtonElement>[];
    testid?: string;
};
export declare type WrapperContainerProps = {
    id?: string;
};
export declare type ButtonsContainerProps = TCFButtons | CcpaButtons | DefaultButtons;

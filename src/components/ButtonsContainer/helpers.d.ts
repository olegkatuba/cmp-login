import { ButtonElement, ButtonsContainerProps, CcpaButtons, DefaultButtons, TCFButtons } from './interface';
import { VNode } from 'preact';
export declare const filterButtons: (btn: (VNode<ButtonElement> | undefined)[]) => VNode<ButtonElement>[];
export declare const isCcpaButtons: (buttons: ButtonsContainerProps) => buttons is CcpaButtons;
export declare const isTCFButtons: (buttons: ButtonsContainerProps) => buttons is TCFButtons;
export declare const isDefaultButtons: (buttons: ButtonsContainerProps) => buttons is DefaultButtons;

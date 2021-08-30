import { Color } from '../../styles';
import { FunctionalComponent } from 'preact';
export interface ButtonComponentProps {
    ariaLabel?: string;
    backgroundColor: Color;
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    onClick?: () => void;
    testid: string;
    textColor?: Color;
}
declare const ButtonComponent: FunctionalComponent<ButtonComponentProps>;
export default ButtonComponent;

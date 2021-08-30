import { FunctionalComponent } from 'preact';
declare type Props = {
    iconUrl: string | null;
    isEnabled: boolean;
    onClick: () => void;
    position: string;
    isMobile: boolean;
};
declare const PrivacyButton: FunctionalComponent<Props>;
export default PrivacyButton;

import { ComponentChild, FunctionalComponent } from 'preact';
import { ANALYTICS_TYPE } from '../../enums';
declare type Link = {
    ariaLabel: string;
    label: string | null;
    type: ANALYTICS_TYPE;
    url: string | null;
};
declare type Button = {
    icon?: ComponentChild;
    label?: string;
    onClick?: () => void;
};
declare type Props = {
    buttons?: Button[];
    links: Link[];
    withoutMargin: boolean;
};
declare const AnchorList: FunctionalComponent<Props>;
export default AnchorList;

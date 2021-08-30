import { FunctionalComponent } from 'preact';
declare type Props = {
    enableHTMLTextFormatting: boolean;
    isShowMoreEnabled?: boolean;
    labelShowMore?: string;
    longDescription?: string;
    maxDescriptionHeight?: number;
    shortDescription?: string | null;
    withFading?: boolean;
};
declare const ShowMoreComponent: FunctionalComponent<Props>;
export default ShowMoreComponent;

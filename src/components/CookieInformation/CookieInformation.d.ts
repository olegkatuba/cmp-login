import { CookieInformationLabels, Disclosure } from '@usercentrics/cmp-browser-sdk';
import { FunctionalComponent } from 'preact';
interface DetailedCookieInformationProps extends Disclosure {
    labels: CookieInformationLabels;
}
declare const CookieInformation: FunctionalComponent<DetailedCookieInformationProps>;
export default CookieInformation;

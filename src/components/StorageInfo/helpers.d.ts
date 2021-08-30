import { CookieInformationLabels } from '@usercentrics/cmp-browser-sdk';
export declare function convertCookieMaxAge(cookieMaxAge: number | null, labels: CookieInformationLabels): string;
export declare function fetchUrl(url: string): Promise<Response | undefined>;
export declare function convertDomain(domain: string, anyDomain: string, multipleDomain: string): string;

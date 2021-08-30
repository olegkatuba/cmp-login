import Usercentrics from '@usercentrics/cmp-browser-sdk';
declare type Variables = any;
declare type Data = {
    [key: string]: any;
} | null;
declare type Method = (...args: Variables) => Promise<FetchResult | void>;
declare type WrapperMethod = (...args: Variables) => Promise<FetchResult>;
declare type MutationTuple = [WrapperMethod, MutationResult];
interface FetchResult {
    data?: Data;
    error?: Error;
}
interface MutationResult {
    error?: Error | null;
    called: boolean;
    data?: Data | null;
    loading: boolean;
}
export declare const useMutation: (method: Method, scope: Usercentrics) => MutationTuple;
export {};

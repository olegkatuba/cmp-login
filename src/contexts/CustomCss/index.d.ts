import { CSS_SELECTOR, UseCustomCssReturn } from './interface';
import { FunctionalComponent } from 'preact';
export { CSS_SELECTOR } from './interface';
export declare const CustomCssProvider: FunctionalComponent;
export declare const useCustomCss: (selector?: CSS_SELECTOR | undefined) => UseCustomCssReturn;

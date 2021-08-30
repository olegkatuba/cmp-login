import { FunctionalComponent } from 'preact';
import { StateUpdater } from 'preact/hooks';
import Usercentrics, { BaseCategory, BaseService, Category, Service } from '@usercentrics/cmp-browser-sdk';
import { VIEW } from '../../enums';
export declare type UIService = Service | BaseService;
export declare type UICategory = Category | BaseCategory;
export declare const areServicesFull: (value: UIService[]) => value is Service[];
export declare const areCategoriesFull: (value: UICategory[]) => value is Category[];
export interface CategoryContextType {
    categories: UICategory[];
    getUpdatedCategories: (view: VIEW) => Promise<UICategory[]>;
    services: UIService[];
    setCategories: StateUpdater<UICategory[]>;
}
interface Props {
    UC: Usercentrics;
}
export declare const CategoryContextProvider: FunctionalComponent<Props>;
export declare const useCategoryContext: () => CategoryContextType;
export {};

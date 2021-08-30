import { UICategory, UIService } from '../contexts/CategoryContext';
interface ObjectWithId {
    id: number | string;
}
/**
 * Helper method for sorting any array with a string or number id in ascending order. Should be used in combination with useMemo() for best performance.
 */
export declare function sortById<T extends ObjectWithId>(arrayToBeSorted: T[]): T[];
/**
 * Helper method for sorting any array by prop in ascending order. Should be used in combination with useMemo() for best performance.
 */
export declare function sortByPropAsc<T extends Record<string, any>>(arrayToBeSorted: T[], propName: string): T[];
/**
 * Helper method to sort specifically the categories
 * @param categories categories to be sorted
 */
export declare function sortCategories(categories: UICategory[]): UIService[];
export {};

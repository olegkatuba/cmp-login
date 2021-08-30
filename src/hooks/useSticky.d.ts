import { RefObject } from 'preact';
export declare const useSticky: (scrollElement: Element | null, distanceFromTop: number, scrollChildRef: RefObject<HTMLElement> | null, setDistance: (distance: number) => void) => boolean;

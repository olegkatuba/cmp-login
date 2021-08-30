import { ComponentChild } from 'preact';
import { TAB_VIEW } from '../../enums';
export declare type TabId = TAB_VIEW;
export interface TabListProps {
    ariaLabel: string;
    children: ComponentChild;
}
export interface UseTabsReturn {
    registerPanel: (panel: TabId) => void;
    select: (tabId: TabId) => void;
    selected: TabId | null;
    unRegisterPanel: (panel: TabId) => void;
}
export interface PanelProps {
    id: TabId;
    testid: string;
}
export interface TabProps {
    ariaLabel: string;
    testid: string;
    forPanel: TabId;
}

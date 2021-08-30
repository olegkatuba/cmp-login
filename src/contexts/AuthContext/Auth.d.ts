import { h, RenderableProps } from "preact";
declare type SupportedProviders = "google" | "apple";
interface AuthContextValues {
    authenticated: boolean;
    user: any;
    saveUser: any;
    removeUser: any;
    signInWith: (provider: SupportedProviders) => any;
    setShowSignIn: any;
    showSignIn: boolean;
}
export declare const initialState: Partial<AuthContextValues>;
declare const AuthContext: import("preact").Context<Partial<AuthContextValues>>;
export declare function AuthProvider({ children, localStorageKey, }: RenderableProps<{
    localStorageKey?: string;
}>): h.JSX.Element;
export declare function useAuthEffect({ onSuccess, onFailure, settingsId, controllerId, }: {
    onSuccess: ({ provider, token, id, controllerId }: {
        token: string;
        id: string;
        provider: string;
        controllerId: string;
    }) => any;
    onFailure: ({ provider, error }: {
        provider: string;
        error: string;
    }) => any;
    settingsId: string;
    controllerId: string;
}): void;
export declare function useAuthContext(): Partial<AuthContextValues>;
export default AuthContext;

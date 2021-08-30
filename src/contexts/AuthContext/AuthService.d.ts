declare class AuthService {
    postAuth({ token, controllerId, settingsId, hostname, provider }: {
        token: string;
        controllerId: string;
        settingsId: string;
        hostname: string;
        provider: 'google' | 'apple';
    }): Promise<any>;
}
declare const _default: AuthService;
export default _default;

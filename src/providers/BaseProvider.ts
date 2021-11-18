abstract class BaseAuthProvider {
  abstract readonly name: string;
  constructor(public clientId: string) {
    this.clientId = clientId;
  }

  abstract getAuthUrl({
    state,
    redirectUrl,
  }: {
    state: string;
    redirectUrl: string;
  }): string;

  abstract getIdByToken(token: string): Promise<string>;
}

export default BaseAuthProvider;

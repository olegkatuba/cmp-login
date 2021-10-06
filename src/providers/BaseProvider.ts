abstract class BaseAuthProvider {
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
}

export default BaseAuthProvider;

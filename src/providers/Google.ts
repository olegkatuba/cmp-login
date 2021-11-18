import { makeQueryParamsString } from "../utils";
import BaseAuthProvider from "./BaseProvider";
import { OAuth2Client, TokenPayload } from "google-auth-library";

class GoogleAuthProvider extends BaseAuthProvider {
  name: string = 'google';
  client: OAuth2Client;
  constructor(public clientId: string) {
    super(clientId);
    this.client = new OAuth2Client(clientId);
  }

  getAuthUrl({ state, redirectUrl }: { state: string; redirectUrl: string }) {
    const queryParams: any = {
      response_type: "id_token%20code",
      response_mode: "form_post",
      state,
      scope: "email",
      prompt: "select_account",
      redirect_uri: redirectUrl,
      client_id: this.clientId,
      access_type: "offline",
      flowName: "GeneralOAuthFlow",
    };
    const queryString = makeQueryParamsString(queryParams);
    return `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?${queryString}`;
  }

  async getIdByToken(token: string): Promise<string> {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: this.clientId,
    });
    const payload = ticket.getPayload();
    console.log(payload);
    return payload.sub;
  }

  /* async getIdByToken(token: string): Promise<string> {
    const payload = jwt.decode(token);
    const { sub } = payload as { sub: string };
    return sub;
  } */
}

export default GoogleAuthProvider;

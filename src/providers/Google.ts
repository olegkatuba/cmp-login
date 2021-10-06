import { makeQueryParamsString } from "../utils";
import BaseAuthProvider from "./BaseProvider";

class GoogleAuthProvider extends BaseAuthProvider {
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
}

export default GoogleAuthProvider;

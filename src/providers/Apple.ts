import { makeQueryParamsString } from "../utils";
import BaseAuthProvider from "./BaseProvider";

class AppleAuthProvider extends BaseAuthProvider {
  getAuthUrl({ state, redirectUrl }: { state: string; redirectUrl: string }) {
    const queryParams: any = {
      response_type: "id_token%20code",
      response_mode: "form_post",
      state,
      redirect_uri: redirectUrl,
      client_id: this.clientId,
    };
    const queryString = makeQueryParamsString(queryParams);
    return `https://appleid.apple.com/auth/authorize?${queryString}`;
  }
}

export default AppleAuthProvider;

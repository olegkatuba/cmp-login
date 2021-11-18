import { makeQueryParamsString } from "../utils";
import BaseAuthProvider from "./BaseProvider";
import verifyAppleToken from "verify-apple-id-token";

class AppleAuthProvider extends BaseAuthProvider {
  name: string = "apple";
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

  async getIdByToken(token: string): Promise<string> {
    const jwtClaims = await verifyAppleToken({
      idToken: token,
      clientId: this.clientId,
    });
    return jwtClaims.sub;
  }
}

export default AppleAuthProvider;

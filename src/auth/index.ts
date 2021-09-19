import express from "express";
import apple from "./apple";
import google from "./google";

const authRouter = express.Router();

authRouter.get("/google/oidc", (req, res) => {
  const queryParams: any = {
    "response_type": "id_token%20code",
    "scope": "email",
    "prompt": "select_account",
    // "include_granted_scopes": false,
    // "redirect_uri": "storagerelay%3A%2F%2Fhttp%2Flocalhost%3A8080%3Fid%3Dauth956426",
    // "redirect_uri": "http%3A%2F%2Flocalhost%3A8080%2FgoogleAuthRedirect.html",
    "redirect_uri": `${process.env.BASE_URL}/googleAuthRedirect.html`,
    "client_id": process.env.GOOGLE_CLIENT_ID,
    // "ss_domain": "http%3A%2F%2Flocalhost%3A8080",
    // "gsiwebsdk": 2,
    "access_type": "offline",
    "flowName": "GeneralOAuthFlow",
  };
  const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
  // window.open("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A8080%3Fid%3Dauth917580&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=4357416598-q07c52qvdlt9tottmlo3c3mp723e0rf0.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A8080&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow", 'Google', params);
  const url = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?${queryString}`;
  res.redirect(url);
});

authRouter.get("/apple/oidc", (req, res) => {
  const queryParams: any = {
    "response_type": "id_token%20code",
    // "scope": "name%20email",
    "response_mode": "fragment",
    "v": "1.5.4",
    "redirect_uri": `${process.env.BASE_URL}/appleAuthRedirect.html`,
    "client_id": process.env.APPLE_CLIENT_ID,
    // "access_type": "offline",
    // "flowName": "GeneralOAuthFlow",
  };
  const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
  // window.open("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A8080%3Fid%3Dauth917580&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=4357416598-q07c52qvdlt9tottmlo3c3mp723e0rf0.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A8080&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow", 'Google', params);
  const url = `https://appleid.apple.com/auth/authorize?${queryString}`;
  res.redirect(url);
});

authRouter.use("/google", google);
authRouter.use("/apple", apple);

export default authRouter;

import express from "express";
import * as argon2 from "argon2";
import UserService from "../services/user";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verify(token: string) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
}

export default express
  .Router()
  .post("/", async (req: express.Request, res: express.Response, next) => {
    const provider = 'google';
    const { controllerId, token, settingsId, hostname } = req.body;

    const payload = jwt.decode(token); // await verify(token).catch(console.error);

    const { sub } = payload as { sub: string };
    const userId = sub;

    const savedControllerId = await UserService.getControllerIdByUser({
      userId,
      provider,
      hostname,
      settingsId,
      controllerId,
    });

    res.send({
      controllerId: savedControllerId,
      provider,
      consentsHistoryLink: `${process.env.CONSENTS_HISTORY_URL}/${provider}/${userId}`
    });
  })
  .get("/auth", (req, res) => {
    const queryParams: any = {
      "response_type": "id_token%20code",
      "scope": "email",
      "prompt": "select_account",
      "redirect_uri": `${process.env.BASE_URL}/googleAuthRedirect.html`,
      // "redirect_uri": `${process.env.BASE_URL}/api/auth/google/code`,
      "client_id": process.env.GOOGLE_CLIENT_ID,
      "access_type": "offline",
      "flowName": "GeneralOAuthFlow",
    };
    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
    // window.open("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A8080%3Fid%3Dauth917580&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=4357416598-q07c52qvdlt9tottmlo3c3mp723e0rf0.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A8080&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow", 'Google', params);
    const url = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?${queryString}`;
    res.redirect(url);
  });

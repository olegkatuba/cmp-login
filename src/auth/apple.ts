import express from "express";
import * as argon2 from "argon2";
import UserService from "../services/user";
import verifyAppleToken from "verify-apple-id-token";
import jwt from "jsonwebtoken";

export default express
  .Router()
  .post("/", async (req: express.Request, res: express.Response, next) => {
    const provider = 'apple';
    const { controllerId, token, settingsId, hostname } = req.body;

    const payload = jwt.decode(token);

    /* const payload = await verifyAppleToken({
      idToken: token,
      clientId: process.env.APPLE_CLIENT_ID,
    }); */

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
      "response_mode": "fragment",
      "v": "1.5.4",
      "redirect_uri": `${process.env.BASE_URL}/appleAuthRedirect.html`,
      // "redirect_uri": `${process.env.BASE_URL}/api/auth/apple/code`,
      "client_id": process.env.APPLE_CLIENT_ID,
    };
    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
    const url = `https://appleid.apple.com/auth/authorize?${queryString}`;
    res.redirect(url);
  });

import express from "express";
import * as argon2 from "argon2";
import UserService from "../services/user";
import jwt from "jsonwebtoken";
import { renderPostMessageScript } from "../utils";

export default express
  .Router()
  .post("/", async (req: express.Request, res: express.Response, next) => {
    const provider = 'apple';
    const { controllerId, token, settingsId, hostname } = req.body;

    const payload = jwt.decode(token);

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
  .get("/", (req, res) => {
    const state = req.query.state;
    const queryParams: any = {
      "response_type": "id_token%20code",
      "response_mode": "form_post",
      "state": state,
      "redirect_uri": `${process.env.BASE_URL}/api/auth/apple/callback`,
      "client_id": process.env.APPLE_CLIENT_ID,
    };
    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
    const url = `https://appleid.apple.com/auth/authorize?${queryString}`;
    res.redirect(url);
  })
  .post(`/callback`, express.urlencoded({ extended: true }), async (req, res) => {
    const provider = "apple";
    const { controllerId, settingsId, hostname } = JSON.parse(
      Buffer.from(req.body.state, "base64").toString()
    );
  
    const payload = jwt.decode(req.body.id_token);
  
    const { sub } = payload as { sub: string };
    const userId = sub;
  
    const savedControllerId = await UserService.getControllerIdByUser({
      userId,
      provider,
      hostname,
      settingsId,
      controllerId,
    });
  
    res.send(renderPostMessageScript({
      controllerId: savedControllerId,
      provider,
      consentsHistoryLink: `${process.env.CONSENTS_HISTORY_URL}/${provider}/${userId}`
    }));
  });

import express from "express";
import * as argon2 from "argon2";
import { UserModel } from "../models/User";
import { OAuth2Client } from "google-auth-library";

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
    const { controllerId, token, settingsId, hostname } = req.body;

    const payload = await verify(token).catch(console.error);

    const { sub } = payload as { sub: string };
    const hashedId = sub;

    const user = await UserModel.findOne({
      id: hashedId,
      provider: "google",
      hostname,
      settingsId,
    }).exec();

    if (user) {
      res.send({
        controllerId: user.controllerId,
        provider: user.provider,
        consentsHistoryLink: `${process.env.CONSENTS_HISTORY_URL}/google/${user.id}`
      });
      return next();
    }

    const doc = await new UserModel({
      provider: "google",
      id: hashedId,
      controllerId,
      settingsId,
      hostname,
    }).save();
    
    res.send({
      controllerId: doc.controllerId,
      provider: doc.provider,
      consentsHistoryLink: `${process.env.CONSENTS_HISTORY_URL}/google/${doc.id}`
    });
  });

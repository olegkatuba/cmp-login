import express from "express";
import * as argon2 from "argon2";
import { UserModel } from "../models/User";
import verifyAppleToken from "verify-apple-id-token";

export default express
  .Router()
  .post("/", async (req: express.Request, res: express.Response, next) => {
    const { controllerId, token, settingsId, hostname } = req.body;

    const jwtClaims = await verifyAppleToken({
      idToken: token,
      clientId: process.env.APPLE_CLIENT_ID,
    });

    const { sub } = jwtClaims;
    const hashedId = sub;

    const user = await UserModel.findOne({
      id: hashedId,
      provider: "apple",
      hostname,
      settingsId,
    }).exec();

    if (user) {
      res.send(user);
      return next();
    }

    const doc = new UserModel({
      provider: "apple",
      id: hashedId,
      controllerId,
      settingsId,
      hostname,
    });
    res.send(await doc.save());
  });

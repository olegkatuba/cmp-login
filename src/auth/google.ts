import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User";

export default express
  .Router()
  .post("/", async (req: express.Request, res: express.Response, next) => {
    const { controllerId, token, settingsId, hostname } = req.body;
    const decodedToken = jwt.decode(token, { json: true }) as {
      sub: string;
      email: string;
    };
    const { sub } = decodedToken;

    const user = await UserModel.findOne({
      id: sub,
      provider: "google",
      hostname,
      settingsId,
    }).exec();

    if (user) {
      res.send(user);
      return next();
    }

    const doc = new UserModel({
      provider: "google",
      id: sub,
      controllerId,
      settingsId,
      hostname,
    });
    res.send(await doc.save());
  });

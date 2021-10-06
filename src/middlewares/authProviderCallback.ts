import { Request, Response } from "express";
import UserService from "../services/user";
import jwt from "jsonwebtoken";
import { renderPostMessageScript } from "../utils";
import HttpException from "../HttpException";

type SupportedProviders = "google" | "apple";

interface CallbackRequestBody{
  state: string,
  id_token: string,
}

export default (provider: SupportedProviders) => async (req: Request<{}, {}, CallbackRequestBody>, res: Response) => {
  let controllerId, settingsId, hostname;
  try {
    const state = JSON.parse(
      Buffer.from(req.body.state, "base64").toString()
    );
    controllerId = state.controllerId;
    settingsId = state.settingsId;
    hostname = state.hostname;
  } catch (e) {
    return new HttpException(400, "Invalid state");
  }

  let payload;
  try {
    payload = jwt.decode(req.body.id_token);
  } catch (e) {
    return new HttpException(400, "Invalid id_token");
  }

  const { sub } = payload as { sub: string };
  const userId = sub;

  const savedControllerId = await UserService.restoreAndSaveControllerId({
    userId,
    provider,
    hostname,
    settingsId,
    controllerId,
  });

  res.send(
    renderPostMessageScript({
      controllerId: savedControllerId,
      provider,
    })
  );
}
import { Request, Response } from "express";
import UserService from "../services/user";
import { renderPostMessageScript } from "../utils";
import HttpException from "../HttpException";
import BaseAuthProvider from "../providers/BaseProvider";

interface CallbackRequestBody{
  state: string,
  id_token: string,
}

export default (authProvider?: BaseAuthProvider) => async (req: Request<{}, {}, CallbackRequestBody>, res: Response) => {
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

  /* let payload;
  try {
    payload = jwt.decode(req.body.id_token);
  } catch (e) {
    return new HttpException(400, "Invalid id_token");
  }

  const { sub } = payload as { sub: string };
  const userId = sub; */
  const userId = await authProvider.getIdByToken(req.body.id_token);

  const savedControllerId = await UserService.restoreAndSaveControllerId({
    userId,
    provider: authProvider.name,
    hostname,
    settingsId,
    controllerId,
  });

  res.send(
    renderPostMessageScript({
      controllerId: savedControllerId,
      provider: authProvider.name,
    })
  );
}
import express, { Request, Response } from "express";
import { body, query } from "express-validator";
import checkValidation from "../../middlewares/checkValidation";
import authProviderCallback from "../../middlewares/authProviderCallback";
import AppleAuthProvider from "../../providers/Apple";

const appleAuthProvider = new AppleAuthProvider(process.env.APPLE_CLIENT_ID);

interface AppleAuthRequestQuery {
  state: string,
}

export default express
  .Router()
  .get(
    "/",
    query("state", "state query is missed").isString().isBase64(),
    checkValidation(),
    (req: Request<{}, {}, {}, AppleAuthRequestQuery>, res: Response) => {
      const state = req.query.state;
      const url = appleAuthProvider.getAuthUrl({
        state,
        redirectUrl: `${process.env.BASE_URL}/api/auth/apple/callback`,
      });
      res.redirect(url);
    }
  )
  .post(
    `/callback`,
    express.urlencoded({ extended: true }),
    body("id_token", "id_token is missed").isJWT(),
    body("state", "state is missed").isString(),
    checkValidation(),
    authProviderCallback(appleAuthProvider)
  );

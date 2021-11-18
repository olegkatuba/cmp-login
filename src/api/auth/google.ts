import express, { Request, Response } from "express";
import { body, query } from "express-validator";
import validate from "../../middlewares/checkValidation";
import authProviderCallback from "../../middlewares/authProviderCallback";
import GoogleAuthProvider from "../../providers/Google";

const googleAuthProvider = new GoogleAuthProvider(process.env.GOOGLE_CLIENT_ID);

interface GoogleAuthRequestQuery {
  state: string,
}

export default express
  .Router()
  .get(
    "/",
    query("state", "state query is missed").isString().isBase64(),
    validate(),
    (req: Request<{}, {}, {}, GoogleAuthRequestQuery>, res: Response) => {
      const state = req.query.state;
      const url = googleAuthProvider.getAuthUrl({
        state,
        redirectUrl: `${process.env.BASE_URL}/api/auth/google/callback`,
      });
      res.redirect(url);
    }
  )
  .post(
    `/callback`,
    express.urlencoded({ extended: true }),
    body("id_token", "id_token is missed").isJWT(),
    body("state", "state is missed").isString(),
    validate(),
    authProviderCallback(googleAuthProvider)
  );

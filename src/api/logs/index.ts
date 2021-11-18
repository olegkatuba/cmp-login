import express, { Request, Response } from "express";
import { query } from "express-validator";
import LogsService from "../../services/logs";

const logsRouter = express.Router();

interface LogsRequestQuery {
  type: string;
  controllerId: string;
  settingsId: string;
}

logsRouter.get(
  "/",
  query("type", "type query is missed").isString(),
  query("controllerId", "controllerId query is missed").isString(),
  query("settingsId", "settingsId query is missed").isString(),
  async (req: Request<{}, {}, {}, LogsRequestQuery>, res: Response) => {
    console.log(req.query);
    LogsService.log(req.query);
    res.status(200).send();
  }
);

export default logsRouter;

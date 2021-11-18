import express from "express";
import auth from "./auth";
import logs from "./logs";

const apiRouter = express.Router();

apiRouter.use("/auth", auth);
apiRouter.use("/logs", logs);

export default apiRouter;

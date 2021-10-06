import express from "express";
import auth from "./auth";

const apiRouter = express.Router();

apiRouter.use("/auth", auth);

export default apiRouter;

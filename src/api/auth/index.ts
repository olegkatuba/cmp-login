import express from "express";
import apple from "./apple";
import google from "./google";

const authRouter = express.Router();

authRouter.use("/google", google);
authRouter.use("/apple", apple);

export default authRouter;

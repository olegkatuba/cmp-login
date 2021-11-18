require("dotenv").config();

import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import apiRouter from "./api";
import compression from "compression";

const app = express();

app.use(compression())

app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.use(errorHandler);

async function bootstrap() {
  try {
    await connect(process.env.DB_CONNECTION_STRING);
  } catch (err) {
    console.log("DB connection error", err);
  }

  app.listen(process.env.APP_PORT, () =>
    console.log(`Server is running on port ${process.env.APP_PORT}`)
  );
}

bootstrap().catch((err) => {
  console.log(err);
});

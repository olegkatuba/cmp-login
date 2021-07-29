import express from "express";
import { connect } from "mongoose";
import cors from "cors";
// import * as argon2 from "argon2";
import authRouter from "./auth";

require("dotenv").config();

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
});

app.use("/api/auth", authRouter);

async function bootstrap() {
  try {
    await connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log('DB connection error', err);
  }

  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
}

bootstrap().catch((err) => {
  console.log(err);
});

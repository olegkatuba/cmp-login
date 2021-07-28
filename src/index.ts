import express from "express";
import { connect } from "mongoose";
import { UserModel } from "./models/User";
import jwt from "jsonwebtoken";
import cors from "cors";
// import * as argon2 from "argon2";

require("dotenv").config();

const app = express();

app.use(express.static('public'))

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
});

app.post("/auth/google", async (req: express.Request, res: express.Response, next) => {
  const { controllerId, token, settingsId } = req.body;
  const decodedToken = jwt.decode(token, { json: true }) as { sub: string, email: string };
  const { sub, email } = decodedToken;

  const user = await UserModel.findOne({
    email: email,
    provider: 'google',
    settingsId
  }).exec();

  if (user) {
    res.send(user);
    return next();
  }

  const doc = new UserModel({
    provider: 'google',
    id: sub,
    email: email,
    controllerId,
    settingsId,
  });
  res.send(await doc.save());
});

app.post("/auth/apple", async (req: express.Request, res: express.Response, next) => {
  const { controllerId, token, settingsId } = req.body;
  const decodedToken = jwt.decode(token, { json: true }) as { sub: string, email: string };
  const { sub, email } = decodedToken;

  const user = await UserModel.findOne({
    id: sub,
    provider: 'apple',
    settingsId
  }).exec();

  if (user) {
    res.send(user);
    return next();
  }

  const doc = new UserModel({
    provider: 'google',
    id: sub,
    email,
    controllerId,
    settingsId,
  });
  res.send(await doc.save());
});

async function bootstrap() {
  try {
    await connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }

  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
}

bootstrap();

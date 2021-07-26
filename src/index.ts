import express from "express";
import { connect } from "mongoose";
import { UserModel } from "./models/User";
import jwt from "jsonwebtoken";
import cors from "cors";

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
  const decodedToken = jwt.decode(token, { json: true }) as { name: string, email: string };
  const { name, email } = decodedToken as { name: string, email: string };

  const user = await UserModel.findOne({ email, provider: 'google', settingsId }).exec();
  if (user) {
    res.send(user);
    return next();
  }

  const doc = new UserModel({
    provider: 'google',
    name,
    email,
    controllerId,
    settingsId,
  });
  res.send(await doc.save());
});

async function bootstrap() {
  try {
    console.log(process.env.DB_CONNECTION_STRING);
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

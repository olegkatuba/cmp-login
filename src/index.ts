import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import authRouter from "./auth";
import { UserModel } from "./models/User";
import axios from "axios";

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

app.get("/api/consents/:provider/:userId", async (req: express.Request, res:  express.Response) => {
  const users = await UserModel.find({
    id: req.params.userId,
    provider: req.params.provider,
  }).exec();

  const consents = Promise.all(users.map((user) => {
    return axios.get(`https://consents.usercentrics.eu/consentsHistory?controllerId=${user.controllerId}`)
      .then(res => res.data);
  }));

  const templates = Promise.all(users.map((user) => {
    return axios.get(`https://api.usercentrics.eu/settings/${user.settingsId}/latest/en.json`)
      .then(res => res.data)
      .then((settings: any) => {
        const templatesIds = settings.consentTemplates.map((t: any) => `${t.templateId}@${t.version}`);
        return axios.get(`https://aggregator.service.usercentrics.eu/aggregate/en?templates=${templatesIds.join(',')}`);
      })
      .then(res => res.data)
      .then(data => data.templates.reduce((obj: any, t: any) => {
        obj[t.templateId] = t;
        obj[t.templateId].consents = [];
        return obj;
      }, {}));
  }));

  Promise.all([consents, templates])
    .then(([consents, templates]) => {
      return users.map((user, i) => {
        consents[i].forEach((consent: any) => {
          const template = templates[i][consent.templateId];
          if (template) {
            template.consents.push(consent);
          }
        });
        return {
          hostname: user.hostname,
          controllerId: user.controllerId,
          settingsId: user.settingsId,
          templates: Object.values(templates[i]),
        }
      })
    }).then(users => {
      res.json(users);
    });
});

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

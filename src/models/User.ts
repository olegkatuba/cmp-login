import { Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  controllerId: string;
}

const schema = new Schema<User>({
  provider: { type: String, required: true },
  id: { type: String, required: true },
  controllerId: { type: String, required: true },
  settingsId: { type: String, required: true },
  hostname: { type: String, required: true }
});

export const UserModel = model<User>("User", schema);

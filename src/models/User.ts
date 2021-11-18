import { Schema, model } from "mongoose";

interface User {
  provider: string;
  id: string;
  controllerId: string;
  settingsId: string;
  hostname: string;
}

const schema = new Schema<User>({
  provider: { type: String, required: true },
  id: { type: String, required: true },
  controllerId: { type: String, required: true },
  settingsId: { type: String, required: true },
  hostname: { type: String, required: true }
}, {
  timestamps: { createdAt: true, updatedAt: false }
});

export const UserModel = model<User>("User", schema);

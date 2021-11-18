import { Schema, model } from "mongoose";

interface Log {
  type: string;
  settingsId: string;
  controllerId: string;
}

const schema = new Schema<Log>({
  type: { type: String, required: true },
  settingsId: { type: String, required: true },
  controllerId: { type: String, required: true },
}, {
  timestamps: { createdAt: true, updatedAt: false }
});

export const LogsModel = model<Log>("LoginLog", schema);

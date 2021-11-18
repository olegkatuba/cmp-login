import { LogsModel } from "../models/Logs";

class LogsService {
  async log({
    type,
    settingsId,
    controllerId,
  }: {
    type: string;
    settingsId: string;
    controllerId: string;
  }): Promise<boolean> {
    const newLog = await new LogsModel({
      type,
      settingsId,
      controllerId,
    }).save();

    return true;
  }
}

export default new LogsService();

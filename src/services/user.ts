import { UserModel } from "../models/User";

class UserService {
  async getControllerIdByUser({
    userId,
    hostname,
    provider,
    settingsId,
    controllerId,
  }: {
    userId: string;
    hostname: string;
    provider: string;
    settingsId: string;
    controllerId: string;
  }) {
    const user = await UserModel.findOne({
      id: userId,
      provider,
      hostname,
      settingsId,
    }).exec();

    if (user) {
      return {
        controllerId: user.controllerId,
        provider: user.provider,
        consentsHistoryLink: `${process.env.CONSENTS_HISTORY_URL}/${provider}/${user.id}`,
      };
    }

    const doc = await new UserModel({
      provider,
      id: userId,
      controllerId,
      settingsId,
      hostname,
    }).save();

    return doc.controllerId;
  }
}

export default new UserService();

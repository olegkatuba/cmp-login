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

    if (user?.controllerId) {
      return user.controllerId;
    }

    const newUser = await new UserModel({
      provider,
      id: userId,
      controllerId,
      settingsId,
      hostname,
    }).save();

    return newUser.controllerId;
  }
}

export default new UserService();

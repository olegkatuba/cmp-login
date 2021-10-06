import { UserModel } from "../models/User";
import crypto from "crypto";

class UserService {
  async restoreAndSaveControllerId({
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
  }): Promise<string> {
    const hashedUserId = crypto
      .createHmac("sha256", process.env.HASH_SECRET)
      .update(userId)
      .digest("hex");

    const user = await UserModel.findOne({
      id: hashedUserId,
      provider,
      hostname,
      settingsId,
    }).exec();

    if (user?.controllerId) {
      return user.controllerId;
    }

    const newUser = await new UserModel({
      id: hashedUserId,
      provider,
      controllerId,
      settingsId,
      hostname,
    }).save();

    return newUser.controllerId;
  }
}

export default new UserService();

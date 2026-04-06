import User from "../model/User.js";
import { UserProps } from "../../../types/types.js";

type UserReturn = UserProps | null

class UserRepository {

  async findById(id: number): Promise<UserReturn> {
    try {
      return await User.findOne({ 
        where: { id },
        raw: true 
      }) as UserReturn
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async findByEmail(email: string): Promise<UserReturn> {
    try {
      return await User.findOne({
        where: { email },
        raw: true
      }) as UserReturn
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

}

export default new UserRepository();
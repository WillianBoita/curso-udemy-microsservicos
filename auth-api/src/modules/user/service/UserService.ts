import UserRepository from "../repository/UserRepository.js";
import { Request } from "express";

type Params = {
  email: string;
}

class UserService {


  async findByEmail(req: Request<Params>) {
    try {
      const email = req.params.email
      this.validateRequestData(email)
      const user = await UserRepository.findByEmail(email);
      
      if(!user) {
        return null;
      }

      return {
        status: 200,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      }

    } catch (err: any) {
      return {
        status: err.status ? err.status : 500,
        message: err.message
      }
    }
  }

  validateRequestData(email: string) {
    if (!email) {
      throw new Error("Email não informado")
    }
  }
}

export default new UserService();
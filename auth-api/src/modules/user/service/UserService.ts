import UserRepository from "../repository/UserRepository.js";
import { Request } from "express";
import UserException from "../exception/UserException.js";
import { UserReturn } from "../../../types/types.js";

type Params = {
  email: string;
}

class UserService {
  async findByEmail(req: Request<Params>) {
    try {
      const email = req.params.email
      this.validateRequestData(email)
      const user = await UserRepository.findByEmail(email);
      this.validateUserNotFound(user)
      return {
        status: 200,
        user: {
          id: user!.id,
          name: user!.name,
          email: user!.email,
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
      throw new UserException(400, "Email não informado")
    }
  }

  validateUserNotFound(user: UserReturn){
    if(!user){
      throw new UserException(404, "Usuário não encontrado")
    }

  }
}

export default new UserService();
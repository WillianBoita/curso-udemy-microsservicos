import Jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'


import UserRepository from "../repository/UserRepository.js";
import UserException from "../exception/UserException.js";
import { UserReturn } from "../../../types/types.js";

type Params = {
  email: string;
}

class UserService {
  async findByEmail(req: Request<Params>) {
    try {
      const email = req.params.email;
      const { authUser } = req
      this.validateRequestData(email);
      const user = await UserRepository.findByEmail(email);
      this.validateUserNotFound(user);
      this.validateAuthenticatedUser(user, authUser)
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
      throw new UserException(400, "Email não informado");
    }
  }

  validateUserNotFound(user: UserReturn){
    if(!user){
      throw new UserException(404, "Usuário não encontrado");
    }
  }

  validateAuthenticatedUser(user: UserReturn, authUser: number) {
    if(!authUser || user?.id !== authUser) {
      throw new UserException(403, "Você não tem permissão para acessar.")
    }
  }

  async getAccessToken(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      this.validateAccessTokenData(email, password);
      const user = await UserRepository.findByEmail(email);
      this.validateUserNotFound(user)
      await this.validatePassword(password, user!.password)

      const accessToken = Jwt.sign(user as object, process.env.JWT_SECRET, {expiresIn: '1d'});

      return {
        status: 200,
        accessToken
      }

    } catch (err: any) {
        return {
          status: err.status ? err.status : 500,
          message: err.message 
        }
    }
    
  }

  validateAccessTokenData(email: string, password: string) {
    if(!email || !password) {
      throw new UserException(401, "Email e senha não informados.");
    }
  }

  async validatePassword(password: string, hashPassword: string) {
    if (!await bcrypt.compare(password, hashPassword)){
      throw new UserException(401, "Credenciais inválidas.")
    }
  }
}

export default new UserService();
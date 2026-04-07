import { Request, Response } from "express"
import UserService from "../service/UserService.js"

type Params = {
  email: string;
}

class UserController {
  
  async getAccessToken (req: Request, res: Response) {
    const user = await UserService.getAccessToken(req, res)
    return res.status(user.status).json(user)
  }

  async findByEmail (req: Request<Params>, res: Response) {
    const user = await UserService.findByEmail(req)
    return res.status(user.status).json(user)
  }
}

export default new UserController()
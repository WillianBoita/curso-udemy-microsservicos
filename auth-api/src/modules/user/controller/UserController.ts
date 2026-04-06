import { Request, Response } from "express"
import UserService from "../service/UserService.js"

type Params = {
  email: string;
}

class UserController {
  findByEmail = async (req: Request<Params>, res: Response) => {
    const user = await UserService.findByEmail(req)
    return res.status(user.status).json(user)
  }
}

export default new UserController()
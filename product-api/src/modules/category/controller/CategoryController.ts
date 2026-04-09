import { Request, Response } from "express"
import CategoryService from "../service/CategoryService.js"

type Params = {
  id: string
}

class CategoryController {
  async addCategory(req: Request, res: Response) {
    const category = await CategoryService.addCategory(req)
    return res.status(category.status).json(category.newCategory)
  }

  async getCategory(req: Request<Params>, res: Response) {
    const category = await CategoryService.getCategory(req)
    return res.status(category.status).json(category.category)
  }
}

export default new CategoryController()
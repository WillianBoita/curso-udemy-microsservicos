import { Request, Response } from "express"
import CategoryService from "../service/CategoryService.js"

class CategoryController {
  async addCategory(req: Request, res: Response) {
    const category = await CategoryService.addCategory(req)
    return res.status(category.status).json(category)
  }
}

export default new CategoryController()
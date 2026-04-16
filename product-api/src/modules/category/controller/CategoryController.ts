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

  async getAllCategories(req: Request, res: Response) {
    const categories = await CategoryService.getAllCategories()
    return res.status(categories.status).json(categories.categories);
  }

  async updateCategory(req: Request, res: Response) {
    const updatedCategory = await CategoryService.updateCategory(req);
    return res.status(updatedCategory.status).json(updatedCategory.updatedCategory);
  }
}

export default new CategoryController()
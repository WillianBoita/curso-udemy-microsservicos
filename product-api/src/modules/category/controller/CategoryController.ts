import { Request, Response } from "express"
import CategoryService from "../service/CategoryService.js"

class CategoryController {
  async addCategory(req: Request, res: Response) {
    const category = await CategoryService.addCategory(req)
    return res.status(category.status).json(category.newCategory)
  }

  async getCategory(req: Request, res: Response) {
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

  async deleteCategory(req: Request, res: Response) {
    const deletedCategory = await CategoryService.deleteCategory(req);
    return res.status(deletedCategory.status);
  }
}

export default new CategoryController()
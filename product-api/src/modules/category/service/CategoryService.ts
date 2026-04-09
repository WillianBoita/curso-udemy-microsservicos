import { Request } from "express";

import CategoryRepository from "../repository/CategoryRepository.js";
import CategoryException from "../exception/CategoryException.js";

class CategoryService {
  async addCategory(req: Request) {
    try {
      const { name } =  req.body;
      const exists = await CategoryRepository.findByName(name);
      if(exists) {
        throw new CategoryException(400, "Essa categoria já existe.")
      }

      const newCategory = await CategoryRepository.createCategory(name)

      return {
        status: 201,
        newCategory
      }
      
    } catch (err: any) {
      throw new CategoryException(err.status, err.message)
    }
  }
}

export default new CategoryService();
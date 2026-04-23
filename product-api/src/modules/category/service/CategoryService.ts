import { Request } from "express";

import CategoryRepository from "../repository/CategoryRepository.js";
import CategoryException from "../exception/CategoryException.js";

class CategoryService {
  async addCategory(req: Request) {
    try {
      const { name } = req.body;
      const formattedName = name.trim();
      this.validateCategoryName(formattedName);
      const exists = await CategoryRepository.findByName(formattedName);
      if(exists) {
        throw new CategoryException(400, "Essa categoria já existe.");
      }

      const newCategory = await CategoryRepository.createCategory(formattedName);

      return {
        status: 201,
        newCategory
      }
      
    } catch (err: any) {
      throw new CategoryException(err.status, err.message);
    }
  }

  validateCategoryName(name: string) {
    if(!name || typeof name !== "string") {
      throw new CategoryException(400, "Informe o nome da categoria.");
    }
  }

  async getCategory(req: Request) {
    try {
      const { id } = req.params;
      const formattedId = parseInt(id as string);
      this.validateCategoryId(formattedId);
      const category = await CategoryRepository.findById(formattedId);

      if(!category) {
        throw new CategoryException(404, "Categoria não encontrada.");
      }

      return {
        status: 200,
        category
      }

    } catch (err: any) {
      throw new CategoryException(err.status, err.message);
    }
  }

  validateCategoryId(id: number) {
    if(!id || id < 1) {
      throw new CategoryException(400, "Id inválido informado.");
    }
  }

  async getAllCategories() {
    try {
      const categories = await CategoryRepository.findAll();

      if (!categories) {
        throw new CategoryException(404, "Nenhuma categoria encontrada.");
      }

      return {
        status: 200,
        categories
      }
    } catch (err: any) {
      throw new CategoryException(err.status, err.message);
    }
  }

  async updateCategory(req: Request) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const formattedId = parseInt(id as string);

      this.validateCategoryId(formattedId);
      this.validateCategoryName(name);

      const updatedCategory = await CategoryRepository.updateCategory(formattedId, name);

      if(!updatedCategory) {
        throw new CategoryException(404, "Essa categoria não existe")
      }

      return {
        status: 200,
        updatedCategory
      }
    } catch (err: any) {
      throw new CategoryException(err.status, err.message);
    }
  }

  async deleteCategory(req: Request) {
    try {
      const { id } = req.params;
      const formattedId = parseInt(id as string);
      this.validateCategoryId(formattedId);

      const deletedCategory = await CategoryRepository.deleteCategory(formattedId);

      if (!deletedCategory) {
        throw new CategoryException(404, "Essa categoria não existe")
      }

      return {
        status: 204
      }
    } catch (err: any) {
      throw new CategoryException(err.status, err.message);
    }
  }

}

export default new CategoryService();
import Category from "../../models/Category.js";

class CategoryRepository {

  async findByName(name: string) {
    try {
      return await Category.findOne({ 
        where: { description: name },
        raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async findById(id: number) {
    try {
      return await Category.findOne({ 
        where: { id },
        raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }
  
  async findAll() {
    try {
      return await Category.findAll({
       raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async createCategory(description: string) {
    try {
      return await Category.create({
        description
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async updateCategory(id: number, description: string) {
    try {
      return await Category.update({
        description
      },
      {
        where: {id}
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async deleteCategory(id: number) {
    try {
      return await Category.destroy({
        where: { id }
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

}

export default new CategoryRepository();
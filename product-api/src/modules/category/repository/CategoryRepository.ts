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

}

export default new CategoryRepository();
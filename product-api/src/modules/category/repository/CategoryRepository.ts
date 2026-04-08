import Category from "../model/Category.js";

class ProductRepository {

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

}

export default new ProductRepository();
import Product from "../../models/Product.js";

class ProductRepository {

  async findByName(name: string) {
    try {
      return await Product.findOne({ 
        where: { name },
        raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async findById(id: number) {
    try {
      return await Product.findOne({ 
        where: { id },
        raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async createProduct(name: string, qtdAvailable: number) {
    try {
      return await Product.create({
        name,
        qtdAvailable
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

}

export default new ProductRepository();
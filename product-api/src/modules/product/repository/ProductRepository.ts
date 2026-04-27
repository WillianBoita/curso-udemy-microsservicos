import { Model } from "sequelize";
import Product from "../../models/Product.js";
import { ProductProps } from "../../../types/types.js";

type ProductModelType = Model<ProductProps> | null;

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

  async findAll() {
    try {
      return await Product.findAll({
       raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  } 

  async createProduct(name: string, qtdAvailable: number): Promise<ProductModelType> {
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

  async updateProduct(id: number, name: string, qtdAvailable: number) {
    try {
      return await Product.update({
        name,
        qtdAvailable
      },
      {
        where: {id}
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async deleteProduct(id: number) {
    try {
      return await Product.destroy({
        where: { id }
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

}

export default new ProductRepository();
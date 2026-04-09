import { Request } from "express";

import ProductRepository from "../repository/ProductRepository.js";
import ProductException from "../exception/ProductException.js";

class ProductService {
  async addProduct(req: Request) {
    try {
      const { name, qtdAvailable } =  req.body;
      const exists = await ProductRepository.findByName(name);
      if(exists) {
        throw new ProductException(400, "Esse produto já existe.")
      }

      const newProduct = await ProductRepository.createProduct(name, qtdAvailable)

      return {
        status: 201,
        newProduct
      }
      
    } catch (err: any) {
      throw new ProductException(err.status, err.message)
    }
  }
}

export default new ProductService();
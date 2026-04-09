import { Request } from "express";

import ProductRepository from "../repository/ProductRepository.js";
import ProductException from "../exception/ProductException.js";

type AddProductProps = {
  name: string,
  qtdAvailable: number
}

class ProductService {
  async addProduct(req: Request) {
    try {
      const { name, qtdAvailable } = req.body as AddProductProps;
      const formattedName = name.trim()
      this.validateProductData(formattedName, qtdAvailable)

      const exists = await ProductRepository.findByName(formattedName);
      if(exists) {
        throw new ProductException(400, "Esse produto já existe.");
      }

      const newProduct = await ProductRepository.createProduct(formattedName, qtdAvailable);

      return {
        status: 201,
        newProduct
      }
      
    } catch (err: any) {
      throw new ProductException(err.status, err.message)
    }
  }

  validateProductData(name: string, qtd: number) {
    if(!name || !qtd || typeof name !== 'string' || typeof qtd !== 'number') {
      throw new ProductException(400, "Dados do produto inválidos.");
    }
  }
}

export default new ProductService();
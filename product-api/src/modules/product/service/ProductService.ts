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
      const formattedName = name.trim();
      this.validateProductData(formattedName, qtdAvailable);

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
      throw new ProductException(err.status, err.message);
    }
  }

  validateProductData(name: string, qtd: number) {
    if(!name || !qtd || typeof name !== 'string' || typeof qtd !== 'number') {
      throw new ProductException(400, "Dados do produto inválidos.");
    }
  }

  async getProduct(req: Request) {
    try {
      const { id } = req.params;
      const formattedId = parseInt(id as string);
      this.validateProductId(formattedId);
      
      const product = await ProductRepository.findById(formattedId);

      if (!product) {
        throw new ProductException(404, "Esse produto não existe.");
      }

      return {
        status: 200,
        product
      }
    } catch (err: any) {
      throw new ProductException(err.status, err.message);
    }
  }

  validateProductId(id: number) {
    if(!id || id < 1) {
      throw new ProductException(400, "Id inválido informado.")
    }
  }

  async getAllProducts() {
    try {
      const products = await ProductRepository.findAll();

      if (!products) {
        throw new ProductException(404, "Nenhum produto encontrado.");
      }

      return {
        status: 200,
        products
      }
    } catch (err: any) {
      throw new ProductException(err.status, err.message);
    }
  }

  async updateProduct(req: Request) {
    try {
      const { id } = req.params;
      const { name, qtdAvailable } = req.body;
      const formattedId = parseInt(id as string);
      this.validateProductId(formattedId);
      this.validateProductData(name, qtdAvailable);

      const updatedProduct = await ProductRepository.updateProduct(formattedId, name, qtdAvailable);

      if(!updatedProduct) {
        throw new ProductException(404, "Esse produto não existe")
      }

      return {
        status: 200,
        updatedProduct
      }
    } catch (err: any) {
      throw new ProductException(err.status, err.message);
    }
  }

}

export default new ProductService();
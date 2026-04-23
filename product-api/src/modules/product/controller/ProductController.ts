import { Request, Response } from "express"
import ProductService from "../service/ProductService.js" 

class ProductController {
  async addProduct(req: Request, res: Response) {
    const product = await ProductService.addProduct(req);
    return res.status(product.status).json(product.newProduct);
  }

  async getProduct(req: Request, res: Response) {
    const product = await ProductService.getProduct(req);
    return res.status(product.status).json(product.product);
  }

  async getAllProducts(req: Request, res: Response) {
    const products = await ProductService.getAllProducts();
    return res.status(products.status).json(products.products);
  }

  async updateProduct(req: Request, res: Response) {
    const updatedProduct = await ProductService.updateProduct(req);
    return res.status(updatedProduct.status).json(updatedProduct.updatedProduct);
  }

  async deleteProduct(req: Request, res: Response) {
    const deletedProduct = await ProductService.deleteProduct(req);
    return res.status(deletedProduct.status);
  }
}

export default new ProductController();
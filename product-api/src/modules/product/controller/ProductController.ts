import { Request, Response } from "express"
import ProductService from "../service/ProductService.js"

class ProductController {
  async addProduct(req: Request, res: Response) {
    const product = await ProductService.addProduct(req)
    return res.status(product.status).json(product.newProduct)
  }
}

export default new ProductController()
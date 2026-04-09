import { Request, Response } from "express"
import SupplierService from "../service/SupplierService.js"

class SupplierController {
  async addSupplier(req: Request, res: Response) {
      const supplier = await SupplierService.addSupplier(req)
      return res.status(supplier.status).json(supplier)
    }
}

export default new SupplierController()
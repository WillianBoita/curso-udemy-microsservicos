import { Request, Response } from "express"
import SupplierService from "../service/SupplierService.js"

class SupplierController {
  async addSupplier(req: Request, res: Response) {
    const supplier = await SupplierService.addSupplier(req);
    return res.status(supplier.status).json(supplier.newSupplier);
  }

  async getSupplier(req: Request, res: Response) {
    const supplier = await SupplierService.getSupplier(req);
    return res.status(supplier.status).json(supplier.supplier);
  }

  async getAllSuppliers(req: Request, res: Response) {
    const suppliers = await SupplierService.getAllSuppliers();
    return res.status(suppliers.status).json(suppliers.suppliers);
  }

  async updateSupplier(req: Request, res: Response) {
    const updatedSupplier = await SupplierService.updateSupplier(req);
    return res.status(updatedSupplier.status).json(updatedSupplier.updatedSupplier);
  }

  async deleteSupplier(req: Request, res: Response) {
    const deletedSupplier = await SupplierService.deleteSupplier(req);
    return res.status(deletedSupplier.status);
  }
}

export default new SupplierController()
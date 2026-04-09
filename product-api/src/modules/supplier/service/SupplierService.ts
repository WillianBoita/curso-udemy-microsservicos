import { Request } from "express";

import SupplierRepository from "../repository/SupplierRepository.js";
import SupplierException from "../exception/SupplierException.js";

class SupplierService {
  async addSupplier(req: Request) {
    try {
      const { name } =  req.body;
      const exists = await SupplierRepository.findByName(name);
      if(exists) {
        throw new SupplierException(400, "Esse fornecedor já existe.")
      }

      const newSupplier = await SupplierRepository.createSupplier(name)

      return {
        status: 201,
        newSupplier
      }
      
    } catch (err: any) {
      throw new SupplierException(err.status, err.message)
    }
  }
}

export default new SupplierService();
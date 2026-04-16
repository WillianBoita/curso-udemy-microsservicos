import { Request } from "express";

import SupplierRepository from "../repository/SupplierRepository.js";
import SupplierException from "../exception/SupplierException.js";

class SupplierService {
  async addSupplier(req: Request) {
    try {
      const { name } =  req.body;
      this.validateSupplierData(name);
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

  validateSupplierData(name: string) {
    if(!name || typeof name !== 'string') {
      throw new SupplierException(400, "Dados do fornecedor inválidos.");
    }
  }

  async getSupplier(req: Request) {
    try {
      const { id } = req.params;
      const formattedId = parseInt(id as string);
      this.validateSupplierId(formattedId);

      const supplier = await SupplierRepository.findById(formattedId);

      if (!supplier) {
        throw new SupplierException(400, "Esse fornecedor não existe.");
      }

      return {
        status: 200,
        supplier
      }

    } catch (err: any) {
      throw new SupplierException(err.status, err.message)
    }
  }

  validateSupplierId(id: number) {
    if(!id || id < 1) {
      throw new SupplierException(400, "Id inválido informado.")
    }
  }

  async getAllSuppliers() {
    try {
      const suppliers = await SupplierRepository.findAll();

      if (!suppliers) {
        throw new SupplierException(404, "Nenhum fornecedor encontrado.");
      }

      return {
        status: 200,
        suppliers
      }
    } catch (err: any) {
      throw new SupplierException(err.status, err.message);
    }
  }

  async updateSupplier(req: Request) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const formattedId = parseInt(id as string);
      this.validateSupplierId(formattedId);
      this.validateSupplierData(name);

      const updatedSupplier = await SupplierRepository.updateSupplier(formattedId, name);

      if(!updatedSupplier) {
        throw new SupplierException(404, "Esse produto não existe")
      }

      return {
        status: 200,
        updatedSupplier
      }
    } catch (err: any) {
      throw new SupplierException(err.status, err.message);
    }
  }


}

export default new SupplierService();
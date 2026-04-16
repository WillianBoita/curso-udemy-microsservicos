import Supplier from "../../models/Supplier.js";

class SupplierRepository {

  async findByName(name: string) {
    try {
      return await Supplier.findOne({ 
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
      return await Supplier.findOne({
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
      return await Supplier.findAll({
       raw: true 
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async createSupplier(name: string) {
    try {
      return await Supplier.create({
        name
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

  async updateSupplier(id: number, name: string) {
    try {
      return await Supplier.update({
        name
      },
      {
        where: {id}
      })
    } catch (err: any) {
      console.error(err.message)
      return null;
    }
  }

}

export default new SupplierRepository();
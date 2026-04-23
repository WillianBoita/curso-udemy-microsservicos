import Express from "express";
import SupplierController from "../controller/SupplierController.js";

const router = Express.Router();

router.post('/api/supplier', SupplierController.addSupplier);
router.get('/api/supplier/:id', SupplierController.getSupplier);
router.get('/api/supplier', SupplierController.getAllSuppliers);
router.put('/api/supplier/:id', SupplierController.updateSupplier);
router.delete('/api/supplier/:id', SupplierController.deleteSupplier);

export default router;
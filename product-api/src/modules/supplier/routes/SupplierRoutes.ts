import Express from "express";
import SupplierController from "../controller/SupplierController.js";

const router = Express.Router();

router.post('/api/supplier', SupplierController.addSupplier);
router.get('/api/supplier/:id', SupplierController.getSupplier);
router.get('/api/supplier', SupplierController.getAllSuppliers);
router.get('/api/supplier/:id', SupplierController.updateSupplier);

export default router;
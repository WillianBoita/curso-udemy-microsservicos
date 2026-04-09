import Express from "express";
import SupplierController from "../controller/SupplierController.js";

const router = Express.Router();

router.post('/api/supplier', SupplierController.addSupplier);

export default router;
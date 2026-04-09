import Express from "express";
import ProductController from "../controller/ProductController.js";

const router = Express.Router();

router.post('/api/product', ProductController.addProduct);

export default router;
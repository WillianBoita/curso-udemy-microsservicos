import Express from "express";
import ProductController from "../controller/ProductController.js";

const router = Express.Router();

router.post('/api/product', ProductController.addProduct);
router.get('/api/product/:id', ProductController.getProduct);
router.get('/api/product', ProductController.getAllProducts);
router.put('/api/product/:id', ProductController.updateProduct);
router.delete('/api/product/:id', ProductController.deleteProduct);

export default router;
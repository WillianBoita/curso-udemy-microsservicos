import Express from "express";
import CategoryController from "../controller/CategoryController.js";

const router = Express.Router();

router.post('/api/category', CategoryController.addCategory);
router.get('/api/category/:id', CategoryController.getCategory);
router.get('/api/category', CategoryController.getAllCategories);
router.put('/api/category/:id', CategoryController.updateCategory);

export default router;
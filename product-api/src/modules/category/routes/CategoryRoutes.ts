import Express from "express";
import CategoryController from "../controller/CategoryController.js";

const router = Express.Router();

router.post('/api/category', CategoryController.addCategory);

export default router;
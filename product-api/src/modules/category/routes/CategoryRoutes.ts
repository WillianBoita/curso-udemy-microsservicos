import Express from "express";
import ProductController from "../controller/CategoryController.js";
import authentication from "../../middleware/authentication.js";

const router = Express.Router();
router.use(authentication)

router.post('/api/user/auth', ProductController);

router.get('/api/user/email/:email', ProductController);

export default router;
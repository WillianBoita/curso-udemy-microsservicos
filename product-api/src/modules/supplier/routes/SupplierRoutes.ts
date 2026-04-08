import Express from "express";
import SupplierController from "../controller/SupplierController.js";
import authentication from "../../middleware/authentication.js";

const router = Express.Router();
router.use(authentication)

router.post('/api/user/auth', SupplierController);

router.get('/api/user/email/:email', SupplierController);

export default router;
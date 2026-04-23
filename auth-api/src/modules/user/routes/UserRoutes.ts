import Express from "express";
import UserController from "../controller/UserController.js";
import Authentication from "../middleware/Authentication.js";

const router = Express.Router();
router.post('/api/user/auth', UserController.getAccessToken);

router.use(Authentication)

router.get('/api/user/email/:email', UserController.findByEmail);

export default router;
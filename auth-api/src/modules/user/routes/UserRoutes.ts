import Express from "express";
import UserController from "../controller/UserController.js";
import authentication from "../middleware/authentication.js";

const router = Express.Router();
router.post('/api/user/auth', UserController.getAccessToken);

router.use(authentication)

router.get('/api/user/email/:email', UserController.findByEmail);

export default router;
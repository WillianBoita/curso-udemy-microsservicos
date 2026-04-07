import Express from "express";
import UserController from "../controller/UserController.js";
import authentication from "../middleware/authentication.js";

const router = Express.Router();
router.get('/api/user/email/:email', authentication, UserController.findByEmail);
router.get('/api/user/auth', UserController.getAccessToken);

export default router;
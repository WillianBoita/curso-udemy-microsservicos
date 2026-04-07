import Express from "express";
import UserController from "../controller/UserController.js";

const router = Express.Router();
router.get('/api/user/email/:email', UserController.findByEmail);
router.get('/api/user/auth', UserController.getAccessToken);

export default router;
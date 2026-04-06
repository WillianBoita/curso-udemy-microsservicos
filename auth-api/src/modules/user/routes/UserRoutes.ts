import Express from "express";
import UserController from "../controller/UserController.js";

const router = Express.Router();
router.get('/user/email/:email', (req, res) =>  UserController.findByEmail(req, res));

export default router;
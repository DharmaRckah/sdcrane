import express from "express";
import {
  createMessageController,
  getMessageController,
} from "../controllers/messageController.js";
import { isAdmin, isLogin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/createContact", createMessageController);
router.get("/getContact",isLogin,isAdmin, getMessageController);

export default router;

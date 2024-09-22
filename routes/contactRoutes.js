import express from "express";
import {
  createMessageController,
  getMessageController,
} from "../controllers/messageController.js";
const router = express.Router();

router.post("/createContact", createMessageController);
router.get("/getContact".isLogin,isAdmin, getMessageController);

export default router;

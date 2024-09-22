import express from "express";
import { loginController } from "../controllers/authController.js";
import { isAdmin, isLogin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/login", loginController);
router.get("/admin-auth", isLogin,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;

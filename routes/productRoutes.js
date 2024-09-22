import express from "express"
import { createProductController, deleteProductController, getAllProductsController, updateProductController } from "../controllers/productController.js";
import { isAdmin, isLogin } from "../middleware/authMiddleware.js";
const router = express.Router();


router.post("/create",isLogin,isAdmin, createProductController)
router.get("/all",getAllProductsController)
router.put("/update/:pid",isLogin,isAdmin,updateProductController)
router.delete("/delete/:pid", isLogin,isAdmin,deleteProductController);
export default router;
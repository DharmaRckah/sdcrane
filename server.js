import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDb } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
connectDb();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/contact", contactRoute);

app.use(express.static(path.join(__dirname, "./sdcrane/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./sdcrane/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server Running on port ${process.env.PORT} in ${process.env.MODE}`
  );
});

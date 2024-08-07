import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.get);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.patch("/:id", productController.update);
router.delete("/:id", productController.delete);

export default router;
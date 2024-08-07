import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.get);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.patch("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
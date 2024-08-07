import express from "express";
import commentController from "../controllers/commentController.js";

const router = express.Router();

router.get("/", commentController.get);
router.get("/:id", commentController.getById);
router.post("/", commentController.create);
router.patch("/:id", commentController.update);
router.delete("/:id", commentController.delete);

export default router;
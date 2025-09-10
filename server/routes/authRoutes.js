import express from "express";
import authController from"../controllers/auth-controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/dashboard", authMiddleware, authController.dashboard);

export default router;

import express from "express";
import mfaMiddleware from "../middlewares/mfaMiddleware.js";

const router = express.Router();

router.delete("/delete-account", mfaMiddleware, (req, res) => {
  try {
    res.status(200).json({
      message: "Account deleted successfully (MFA verified)"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting account",
      error: error.message
    });
  }
});

export default router;
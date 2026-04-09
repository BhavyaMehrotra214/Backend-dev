import { otpStore } from "../middlewares/mfaMiddleware.js";

export const generateOTP = (req, res) => {
  try {
    const userId = req.user.id;

    const otp = Math.floor(100000 + Math.random() * 900000);

    otpStore.set(userId, otp);

    console.log("Generated OTP:", otp);

    res.status(200).json({
      message: "OTP generated successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error generating OTP",
      error: error.message
    });
  }
};
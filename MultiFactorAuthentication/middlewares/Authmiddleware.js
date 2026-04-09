import jwt from "jsonwebtoken";

// Dummy OTP store (later you can use DB or Redis)
const otpStore = new Map(); 
const mfaMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "your_secret_key"); 
    req.user = decoded;

    const userOtp = req.headers["x-otp"]; 
    const storedOtp = otpStore.get(decoded.id);

    if (!userOtp || userOtp != storedOtp) {
      return res.status(403).json({ message: "Invalid or missing OTP" });
    }

    // Optional: delete OTP after use (one-time)
    otpStore.delete(decoded.id);

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default mfaMiddleware;
export { otpStore };
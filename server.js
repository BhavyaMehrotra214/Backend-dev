import dotenv from "dotenv";
dotenv.config();

import connectDb from "./config/db.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
    console.log("server is running on port", port);
});

connectDb();           
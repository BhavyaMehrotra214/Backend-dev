import express from "express";
import logger from "./middlewares/logger.js";

const app = express();

// Use logger middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
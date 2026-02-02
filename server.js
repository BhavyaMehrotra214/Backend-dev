import express from "express";
import registerRouter from "../Router/registerRoute.js";
import userRouter from "./Router/UserRouter.js";
import dashboardRouter from "./Router/dashboardRouter.js";

const port = 3000;
const app = express();

app.use("/api", userRouter);
app.use("/api", registerRouter);
app.use("/api", dashboardRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

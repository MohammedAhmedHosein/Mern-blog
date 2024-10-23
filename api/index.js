import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import UserRouter from "./routes/User.route.js";
import AuthRouter from "./routes/Auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.Mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Error connecting to MongoDB"));

const app = express();
app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const errorMsg = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    errorMsg,
  });



  
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

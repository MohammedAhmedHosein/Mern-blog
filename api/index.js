import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import the CORS middleware

import UserRouter from "./routes/User.route.js";
import AuthRouter from "./routes/Auth.route.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error.message));

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from your frontend
app.use(express.json());

// Define Routes
app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMsg = err.message || "Internal Server Error";

  console.error("Error:", errorMsg); // Log the error for debugging
  res.status(statusCode).json({
    success: false,
    statusCode,
    errorMsg,
  });
});

// Start the Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

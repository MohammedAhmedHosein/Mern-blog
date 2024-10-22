import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.Mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Error connecting to MongoDB"));

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/hello", (req, res) => {
  return res.send("Hello, World!");

});

import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./Router/router.js";
import cors from "cors";
import dotenv from "dotenv";
import "./db.js";
dotenv.config();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(userRoute);
app.listen(3500, () => {
  console.log("Server is Running 3500");
});

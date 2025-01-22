import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./Router/router.js";
import cors from "cors";
import dotenv from "dotenv";
import "./db.js";
const app = express();
dotenv.config();
const allowedOrigins = [
  "https://emailclient-lac.vercel.app", 
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(userRoute);
app.listen(3500, () => {
  console.log("Server is Running 3500");
});

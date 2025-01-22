import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { get_template, Temp_add } from "../Controller/controller.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(
  "../client/public/email_temp",
  express.static(path.join(__dirname, "../client/public/email_temp/"))
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/email_temp/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/check", (req, res) => {
  res.send("hello");
});

router.post(
  "/upload",
  upload.fields([{ name: "imageUrl" }, { name: "logoUrl" }]),
  Temp_add
);

router.get("/get_template", get_template);

export default router;

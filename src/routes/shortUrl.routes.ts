import { Router } from "express";
import { createShortUrlHandler } from "../controllers/shortUrl.controller.js";

const router = Router();

router.post("/", createShortUrlHandler);

export default router;
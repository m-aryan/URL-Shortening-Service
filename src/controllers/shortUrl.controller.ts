import type { Request, Response } from "express";
import { createShortUrl } from "../services/shortUrl.services.js";

export function createShortUrlHandler(req: Request, res: Response) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            message: "valid 'URL' is required"
        })
    }

    const result = createShortUrl(url);
    return res.status(201).json(result);
}
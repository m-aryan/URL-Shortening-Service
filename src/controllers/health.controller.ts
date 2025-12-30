import { Request, Response } from "express";
import { getHealtStatus } from "../services/health.services.js";

export function healthCheck(req: Request, res: Response) {
    const health = getHealtStatus();
    res.status(200).json(health);
}
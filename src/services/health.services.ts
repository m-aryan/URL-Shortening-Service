import { HealthStatus } from "../models/health.model.js";

export function getHealtStatus(): HealthStatus {
    return {
        status: 'ok',
        service: 'URL Shortening Service',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    }
}
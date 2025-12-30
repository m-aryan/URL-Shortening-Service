export interface HealthStatus {
    status: 'ok';
    service: string;
    uptime: number;
    timestamp: string;
}
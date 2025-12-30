import express from "express";
import healthRoutes from "./routes/health.routes.js";
import shortUrlRoutes from "./routes/shortUrl.routes.js";

const app = express();

app.use(express.json());
app.use("/", healthRoutes);
app.use("/shorten", shortUrlRoutes)

export default app;

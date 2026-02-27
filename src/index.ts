import express from "express";
import dotenv from "dotenv";
import { healthcheckRouter } from "./routes/healthcheck.ts";

dotenv.config();
const app = express();

app.use("/healthcheck", healthcheckRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}...`);
});

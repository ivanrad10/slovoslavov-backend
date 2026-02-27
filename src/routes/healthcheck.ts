import { Router, type Request, type Response } from "express";

export const healthcheckRouter = Router();

healthcheckRouter.get("/", (req: Request, res: Response) => {
  res.send("OK!");
});

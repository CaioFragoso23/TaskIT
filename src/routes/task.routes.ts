import { Router } from "express";
import type { Request, Response } from "express";

export const taskRouter: Router = Router();

taskRouter.get("/", (req: Request, res: Response) => {
  return res.send("Listagem de Tasks feita com sucesso");
});
taskRouter.get("/", (req: Request, res: Response) => {
  return res.send("Busca por Task feita com sucesso");
});
taskRouter.delete("/", (req: Request, res: Response) => {
  return res.send("Deleção da Task feita com sucesso");
});
taskRouter.put("/", (req: Request, res: Response) => {});

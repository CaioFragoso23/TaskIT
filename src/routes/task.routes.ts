import { Router } from "express";
import type { Request, Response } from "express";
import { TaskController } from "../controllers/TaskController.ts";

export const taskRouter: Router = Router();
const taskController = new TaskController();

taskRouter.get("/", (req: Request, res: Response) => {
  const tasks = taskController.listTask();
  return res.status(201).json(tasks);
});

taskRouter.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = taskController.getTaskById(id);
  if (!task) return res.status(404).json({ message: "Task não encontrada" });
  return res.json(task);
});

taskRouter.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const task = taskController.deleteTaskById(id);
  } catch (error) {
    return res.send("Deleção da Task feita com sucesso");
  }
});

taskRouter.post("/", (req: Request, res: Response) => {
  const { title, status, description } = req.body;
  try {
    const task = taskController.createTask(title, status, description);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(404);
  }
});

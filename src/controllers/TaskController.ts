import Task, { type IStatus } from "../models/Task.js";

interface ITaskController {
  createTask(title: string, status: IStatus, description: string): Task;
  listTask(): Task[];
  getTaskById(): Task;
  deleteTaskById(): void;
}

export class TaskController implements ITaskController {
  createTask(title: string, status: IStatus, description: string): Task {}
  listTask(): Task[] {}
  getTaskById(): Task {}
  deleteTaskById(): void {}
}

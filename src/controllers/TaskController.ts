import Task, { type IStatus } from "../models/Task.js";

interface ITaskController {
  create_task(title: string, status: IStatus, description: string): Task;
  list_task(): Task[];
  get_task_by_id(): Task;
  delete_task_by_id(): void;
}
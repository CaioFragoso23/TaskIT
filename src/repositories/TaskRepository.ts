import type Task from "../models/Task.js";

export interface ITaskRepository {
  createTask(task: Task): undefined;
  getAllTasks(): Task[];
  getTaskById(id: number): Task | undefined;
  deleteTask(id: number): undefined;
}

let tasks: Task[] = [];
export class TaskRepository implements ITaskRepository {
  createTask(task: Task): undefined {
    tasks.push(task);
  }

  getAllTasks(): Task[] {
    return tasks;
  }

  getTaskById(id: number): Task | undefined {
    const taskFound = tasks.find((task) => {
      let taskId = task.get_id();
      taskId = id;
    });
    return taskFound;
  }

  deleteTask(id: number): undefined {
    const taskFound = tasks.splice(id, id.toString.length);
    console.log("conteúdo excluído");
  }
}

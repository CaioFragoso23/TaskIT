import Task, { type IStatus } from "../models/Task.js";
import { TaskRepository } from "../repositories/TaskRepository.js";

interface ITaskController {
  createTask(title: string, status: IStatus, description: string): Task;
  listTask(): Task[];
  getTaskById(id: number): Task;
  deleteTaskById(id: number): void;
}

export class TaskController implements ITaskController {
  //Lógica de criação de Task
  createTask(title: string, status: IStatus, description: string): Task {
    //Cria uma nova Task com dados recebidos do usuário
    let task = new Task({
      id: 0,
      status: status,
      title: title,
      description: description,
    });
    //Permanece a Task no repositório
    const taskRepo = TaskRepository.getInstance();
    taskRepo.createTask(task);

    //Retorna Task para visualização, mensagens e afins caso seja necessário
    return task;
  }

  //Listagem de Tasks
  listTask(): Task[] {
    //Chama a instância do repositório
    const taskRepo = TaskRepository.getInstance();
    //Chama a lista de Tasks do repositório
    const taskList: Task[] = taskRepo.getAllTasks();
    //Retorna a lista de Tasks
    return taskList;
  }

  //Lógica para pegar Task pelo id
  getTaskById(id: number): Task {
    //Chama a instância do repositório
    const taskRepo = TaskRepository.getInstance();
    //Chama a lista de Tasks do repositório
    const taskFound = taskRepo.getTaskById(id);
    //Retorna a task encontrada
    return taskFound!;
  }

  //Lógica para deletar Task pelo id
  deleteTaskById(id: number): void {
    //Chama a instância do repositório
    const taskRepo = TaskRepository.getInstance();
    //Deleta a Task do repositório
    taskRepo.deleteTask(id);
  }
}

import type { IStatus } from "../models/Task.ts";
import type Task from "../models/Task.ts";
import { TaskRepository } from "../repositories/TaskRepository.ts";

export class TaskService {
  //Lógica de criação de ID
  create_id() {
    let randomNumber = Math.random();
    randomNumber *= 1000;
    return randomNumber;
  }

  //Lógica para completar uma Task
  complete_task(id: number) {
    //Encontra task no repositório
    let task: Task | undefined = TaskRepository.getInstance().getTaskById(id);
    //Cria variável do tipo que recebe o status
    const completedStatus: IStatus = { status: `completed` };
    //Define status como completo 'completed'
    task?.set_status(completedStatus);
  }

  //Lógica para definir status como 'in_progress'
  in_progress_task(id: number) {
    //Encontra task no repositório
    let task: Task | undefined = TaskRepository.getInstance().getTaskById(id);
    //Cria variável do tipo que recebe o status
    const inProgressStatus: IStatus = { status: `in_progress` };
    //Define status como 'in_progress'
    task?.set_status(inProgressStatus);
  }

  reset_task(id: number) {
    //Encontra task no repositório
    let task: Task | undefined = TaskRepository.getInstance().getTaskById(id);
    //Cria variável do tipo que recebe o status
    const pendingStatus: IStatus = { status: `pending` };
    //Define status como 'pending'
    task?.set_status(pendingStatus);
  }

  
}

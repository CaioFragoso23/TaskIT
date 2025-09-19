import type Task from "../models/Task.js";

export interface ITaskRepository {
  createTask(task: Task): undefined; //Criação de Task
  getAllTasks(): Task[]; //Lista todas as Tasks
  getTaskById(id: number): Task | undefined; //Retorna Task pelo ID
  deleteTask(id: number): undefined; //Deleta Task
}

// Lista de Task feita de forma estática para
let tasks: Task[] = [];

export class TaskRepository implements ITaskRepository {
  /* 
  SINGLETON PATTERN
  Esse Repositório segue o padrão Singleton para ter apenas uma única
  instância em todo o funcionamento do programa para manter a permanência
  dos dados de forma consistente, fácil acesso as Tasks e boa performance por
  manter apenas uma única instância
*/

  // 1. Atributo estático para armazenar a única instância do TaskRepository
  private static instance: TaskRepository;

  // 2. O construtor é privado para impedir a criação de novas instâncias.
  private constructor() {}

  // 3. Método estático público que retorna a instância única.
  public static getInstance(): TaskRepository {
    // Se a instância não existe, crie-a.
    if (!TaskRepository.instance) {
      TaskRepository.instance = new TaskRepository();
    }
    // Retorne a instância existente.
    return TaskRepository.instance;
  }

  // Método de criação de Task
  createTask(task: Task): undefined {
    //Appenda Task direto no Repositório (nesse caso, lista estática)
    tasks.push(task);
  }

  // Método de listagem de Tasks
  getAllTasks(): Task[] {
    //Retorna a lista estática de Tasks
    return tasks;
  }

  // Método de pegar dados de uma única task
  getTaskById(id: number): Task | undefined {
    //Procura task em que o id seja igual ao id oferecido por um outro objeto.
    const taskFound = tasks.find((task) => (id = task.get_id()));
    //Retorna Task encontrada
    return taskFound;
  }

  // Método de deleção de Tasks
  deleteTask(id: number): undefined {
    console.group("Delete");
    console.log(tasks.length);
    //Realiza um Splice,
    const taskFound = tasks.findIndex((task) => (id = task.get_id()));
    taskFound !== -1
      ? tasks.splice(taskFound, 1)
      : console.log("Conteúdo não foi encontrado");
    console.log(tasks.length);
    console.log("conteúdo excluído");
  }
}

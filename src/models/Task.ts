export interface IStatus {
  status: `pending` | `in_progress` | `completed`;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: IStatus;
}

export default class Task {

  private id: number;
  private title: string;
  private description: string;
  private status: IStatus;

  constructor({ status, title, description }: ITask) {
    this.id = 1;
    this.status = status;
    this.title = title;
    this.description = description;
  }

  public get_id() {
    return this.id;
  }

  public get_status() {
    return this.status;
  }

  public get_title() {
    return this.title;
  }

  public get_description() {
    return this.description;
  }

  public set_status(status: IStatus) {
    this.status = status;
  }
  public set_title(title: string) {
    this.title = title;
  }
  public set_description(description: string) {
    this.description = description;
  }

  protected set_id() {
    this.id = Math.random();
  }
}

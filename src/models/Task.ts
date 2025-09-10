interface IStatus{
  status: `pending` | `in_progress` | `completed`;
}

class Task{

  public id:number;
  public title:string;
  public description:string;
  public status: IStatus;

  constructor(id : number, status : IStatus, title : string, description : string){
    this.id = id;
    this.status = status;
    this.title = title;
    this.description = description;
  }
}
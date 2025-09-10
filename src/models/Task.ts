interface IStatus{
  status: `pending` | `in_progress` | `completed`;
}

export default class Task{

  private id:number;
  private title:string;
  private description:string;
  public status: IStatus;

  constructor(id : number, status : IStatus, title : string, description : string){
    this.id = id;
    this.status = status;
    this.title = title;
    this.description = description;
  }

  get_id(){
    return this.id;
  }

  get_status( ){
    return this.status;
  }

  get_title( ){
    return this.title;
  }

  get_description(){
    return this.description
  }

  set_status( status : IStatus ){
    this.status = status;
  }
  set_title( title : string ){
    this.title = title;
  }
  set_description( description : string ){
    this.description = description;
  }

}
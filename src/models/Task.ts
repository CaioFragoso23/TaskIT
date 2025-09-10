interface IStatus{
  status: `pending` | `in_progress` | `completed`;
}

export default class Task{

  private id:number;
  private title:string;
  private description:string;
  private status: IStatus;

  constructor(id : number, status : IStatus, title : string, description : string){
    this.id = id;
    this.status = status;
    this.title = title;
    this.description = description;
  }

  public get_id(){
    return this.id;
  }

  public get_status( ){
    return this.status;
  }

  public get_title( ){
    return this.title;
  }

  public get_description(){
    return this.description
  }

  public set_status( status : IStatus ){
    this.status = status;
  }
  public set_title( title : string ){
    this.title = title;
  }
  public set_description( description : string ){
    this.description = description;
  }

}
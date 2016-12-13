class Player {
  constructor(public _name?: string){}
  set name(value: string){
    if(value === undefined){
      throw new Error('name should be defined!');
    }
    this._name = value;
  }

  get name(){
    return this._name ;
  }
}
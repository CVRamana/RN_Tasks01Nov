import {observable ,action} from 'mobx'
class Demo{

  @observable name = "";
  @observable tasks=[];
  @action todo() {
    if(this.name===""){
      alert("Plaese Add the Task")
      return
    }
      console.warn(this.name)
    let data = this.tasks.slice();
    data.push(this.name);
    this.tasks = data
     
  }
}
export default new Demo() 
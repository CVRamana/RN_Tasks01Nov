import { observable, action } from 'mobx'
class Demo {

  @observable name = "";
  @observable tasks = [];
  @observable id1=0;

  @action todo() {
    if (this.name === "") {
      alert("Plaese Add the Task")
      return
    }
    console.warn(this.name)
    let data = this.tasks.slice();
    data.push(this.name);
    this.tasks = data;
    this.name = ""
  }

  @action delete(){
    this.tasks =this.tasks.filter(i => this.tasks.indexOf(i) !== this.id1)
   // this.tasks = data;

  }
}
export default new Demo() 
import {observable,action } from 'mobx'
import axios from 'axios'

class Api_store{
    @observable page_no = 1;
    isloading=true
   // @observable refreshing=false
    @observable id22=""
    @observable payload=[]
    @action MultiDelete(){
 this.payload=this.payload.filter((obj)=>obj.id !== this.id22)

     //alert("alert from Api",this.id22)
    }
    @action hit_Api(){
        // alert(isOnEndReach)
        console.warn('https://reqres.in/api/users?page='+this.page_no);
        axios.get('https://reqres.in/api/users?page='+this.page_no)
        .then((response) => {
          this.payload =this.payload.concat(response.data.data)
          this.isloading=false
        })
        .catch((err) => {
          console.log("Error is:", err)
      
        })
      }
}
export default new Api_store
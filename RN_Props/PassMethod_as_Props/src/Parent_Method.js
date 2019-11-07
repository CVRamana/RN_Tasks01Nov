import React, { Component } from 'react';
import {View,Text,Button} from 'react-native'
import Child_Method from '../src/Child_Method'

export default class Parent_Method extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:"Raman Verma"
      };
      
      //likhna padega
      this.greetParent=this.greetParent.bind(this) 
    };

    //passsing func from parent to child
    greetParent_from_child(name){
        alert("Hello "+name+" passed params from the child to parent")
    }
    // now passing child param to parent func
    greetParent(){
alert("Hello "+ this.state.name)
    }
  render() {
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}> 
          <Text>textInComponent</Text>
          <Child_Method 
          greetHandler={this.greetParent}
          greetfromChild={this.greetParent_from_child}/> 
           </View>
    );
  }
}

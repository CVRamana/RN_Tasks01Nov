import React, { Component } from 'react';
import { View, Text ,FlatList} from 'react-native';
import Child_func_pass from '../src/Child_func_pass'
class Parent_func_pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        people:[
            {name:"raman",age:30},
            {name:"raman",age:30},
            {name:"raman",age:30},
            {name:"raman",age:30},
            {name:"raman",age:30},
        ]
    };
  }
increment=(name)=>{
    let ppl=this.state.people.map((p)=>{
      if(p.name === name){
          p.age=p.age+1
      }  
      return p
    })
    this.setState({
        people:ppl
    })
}

  render() {
    debugger
      let d=this.state.people
      console.warn("Parent rendred")
    return (
      <View style={{flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red"
      }}>
        
          <Text>Parent jhg Component</Text>
          <FlatList
           data={this.d}
           renderItem={({p})=>{
              // console.log("in the FlatList" )
                <Child_func_pass
            name={p.name}
            age={p.age} 
            increment={this.increment}/>
}
}
            />
        </View>
    );
  }
}

export default Parent_func_pass;

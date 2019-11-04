import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Child_func_pass from '../src/Child_func_pass'

class Parent_func_pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "raman1", age: 30 },
        { name: "raman2", age: 30 },
        { name: "raman3", age: 30 },
        { name: "raman4", age: 30 },
        { name: "raman5", age: 30 },
      ]
    };
  }
  increment = (name) => {
    let ppl = this.state.people.map((p) => {
      if (p.name === name) {
        p.age = p.age + 1
      }
      return p
    })
    this.setState({
      people: ppl
    })
  }

  render() {
     
    console.warn("Parent rendred")
    return (
      <View style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "red",
        paddingTop: 50,
      }}>

        <Text>Parent Component
          </Text>
          <FlatList
            data={this.state.people}
            // contentContainerStyle={{ flex: 1, backgroundColor: "yellow" }}
            // style={{ flex: 1, backgroundColor: "blue" }}
            renderItem={({ item }) => {
              return (
              //   <View>
              // <Text>{item.name} </Text>
              // <Text>{item.age}</Text>
              // </View>
              <Child_func_pass
              name={item.name}
              age={item.age}
              increment={this.increment} />
    
              )
            }}
          />

       
      </View>
    );
  }
}

export default Parent_func_pass;
const srtyles = StyleSheet.create({
  parent: {
    paddingTop: 50,
  }
})

import React, { Component } from 'react';
import { View, Text,Button,} from 'react-native';

 export default class Child_func_pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasChanged:false
    };
  }
  increment=()=>{
  this.setState({
  hasChanged:true
})
  }
  render() {
      console.warn("child rendered")
    return (
      <View  style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"orange"}}>
        <Text>  Child_func_pass   </Text>
        <Text> {this.props.name} </Text>
        <Text> {this.props.age}  </Text>
        <Button onPress={this.increment}
        title="Click me"/>
        {this.state.hasChanged} && (
            <Text>Updated </Text>
        )
      </View>
    );
  }
}

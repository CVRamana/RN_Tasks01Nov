import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,Button } from 'react-native';

class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.inputref=React.createRef()
    
  }
  componentDidMount(){
    this.inputref.current.focus()
  }
 //focus() on button click (fetching the value through the ref)
 clickHandler=(value)=>{
//alert(this.inputref.current.value)
 }

  render() {
    return (
      <View >
        <Text> Refs </Text>
        <TextInput
        ref={this.inputref}
       
        style={{height:40,width:300,backgroundColor:"yellow"
    }}
        />
        <Button
        title="focus"
        onPress={this.clickHandler}
        />

      </View>
    );
  }
}

export default Refs;

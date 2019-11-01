import React, { Component } from 'react';
import {View,TextInput,Text,StyleSheet,Button,TouchableOpacity} from 'react-native'

class Refs extends Component {
  constructor(props) {
    super(props)
    this.inputRef=React.createRef()  
  };
  
componentDidMount(){
  this.inputRef.current.focus()
}
handleTap=()=>{
  alert(this.inputRef.current.value)
}

  render() {
    return (
      <View style={styles.parent}> 
        <Text>textInCRman omponent</Text>
        <TextInput
        style={styles.input}
        ref={this.inputRef}
        />
        <TouchableOpacity
        style={{backgroundColor:"red",
        height:50,width:100,
        justifyContent:"center",
        alignItems:"center"}}
        onPress={this.handleTap}
        >
          <Text>Click</Text>
          </TouchableOpacity>
           </View>
    );
  }
}

export default Refs;
const styles=StyleSheet.create({
  input:{
    width:200,
    height:40,
    backgroundColor:"pink"
  },
  parent:{
    alignItems:"center",
    paddingTop:50,
    backgroundColor:"yellow"
  }
})

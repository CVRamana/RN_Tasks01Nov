import React, { Component } from 'react';
import {Text,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native'

export default class Class_Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    };

    handleFocus(){
      this.inputRef.current.focus()
    }
    
  render() {
    return (
      <View style={styles.parent}> 
          <TextInput style={styles.input}
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
  

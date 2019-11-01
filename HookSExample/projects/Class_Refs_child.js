import React, { Component } from 'react';
import {View,TouchbleOpacity} from 'react-native'
class Class_Refs_child extends Component {
  render() {
    return (
      <View style={styles.parent}>
          <Text> textInComponent </Text>
          </View>
    );
  }
}

export default Class_Refs_child;
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
  

import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native';
import Activity_child from '../src/Activity_child'

class Activity_Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:false,
        bg:""
    };
  }
display(){
    console.warn("called")
    this.setState({
        isLoading: !this.state.isLoading,
        bg:"red"
    })
   
       
}
  render() {
      console.log("Activity")
    return (
      <View style={styles.parent}> 
        <Text> Activity_Parent </Text>
        <TouchableOpacity
        style={styles.buttn}
        onPress={()=>{this.display()}}><Text> Show Me</Text> 
        </TouchableOpacity>
        <Text>{String(this.state.isLoading)}</Text>
        <Text>{String(this.state.isLoading)}</Text>
        <Activity_child 
        name="Raman"
        isLoading={this.state.isLoading} />

      </View>
    );
  }
}

export default Activity_Parent;
const styles=StyleSheet.create({
parent:{
    flex: 1,
    //justifyContent: 'center',
    paddingTop:50,
   alignItems:"center",backgroundColor:"yellow"
},
buttn:{
    height:50,
    width:200,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
}
})

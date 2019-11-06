import React, { Component } from 'react';
import { View, Text,Animated,StyleSheet } from 'react-native';
import Button_Comp from '../src/Button_Comp'
import AsyncStorage from '@react-native-community/async-storage';


class Asynch_Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1:''
    };
  }
  componentDidMount(){
    //  this.getLocalData()
    //  AsyncStorage.getItem('email', (err, result) => {
    //    this.setState({email: result}
    //     )})
    AsyncStorage.getItem('emailId', (err, result) => {
      alert(result)
      this.setState({email1: result})})
  }
 
  render() {
    return (
      <View style={styles.parent}>
        <Text style={{fontSize:20,fontWeight:"500",color:"green"}}> Splah Screen </Text>
        <Text> {this.state.email1}</Text> 

 {(this.state.email1 !== null)?this.props.navigation.navigate('Dashboard') : this.props.navigation.navigate('SignUp')}
               <Button_Comp
                title="Sign Up"
                call={() => this.props.navigation.navigate('SignUp')}
                />
      </View>

    );
  }
}

export default Asynch_Storage;
const styles=StyleSheet.create({
  parent:{
    flex:1,
  //  justifyContent:"center",
    alignItems:"center",
    paddingTop:30
  }

})
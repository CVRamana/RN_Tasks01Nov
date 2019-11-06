import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Button_Comp from './Button_Comp';
import AsyncStorage from '@react-native-community/async-storage';
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Fname:'',
        Lname:'',
        Age:'',
        College:'',
        City:'',
       log_email:this.props.navigation.state.params.Email
      // log_email:''
    };
  }
  
  //Storing in the Async
  storeData = async () => {
    // if(this.state.Fname==='' && 
    // this.state.Lname==='' && this.state.Age==='' && this.state.City==='' &&
    //  this.state.College===''){
    //  alert("Plaese fill all the fields ")
    //  return
    // }
    try {
      await AsyncStorage.multiSet([
        ['emailId',this.state.log_email],
        ['Fname',this.state.Fname],
        ['Lname',this.state.Lname],
        ['Age',this.state.Age],
        ['College',this.state.College],
        ['City',this.state.City],
    ])
    console.warn("data saved success")
    } catch (e) {
      console.warn("Failed to save")
    }
  }

  render() {
      const{params}=this.props.navigation.state
      const email=params?params.Email:null
    return (
      <View style={styles.parent}>
        <Text style={{fontSize:20,fontWeight:"500",margin:20,color:"green"}}> Login </Text>
        <TextInput
        placeholder="Fname"
        onChangeText={(txt)=>{this.setState({Fname:txt})}}
        style={styles.input}
        />
        <TextInput
         placeholder="Lname"
         onChangeText={(txt)=>{this.setState({Lname:txt})}}
        style={styles.input}
        />
        <TextInput
         placeholder="Age"
         onChangeText={(txt)=>{this.setState({Age:txt})}}
        style={styles.input}
        />
        <TextInput
         placeholder="College"
         onChangeText={(txt)=>{this.setState({College:txt})}}
        style={styles.input}
        />
        <TextInput
         placeholder="City"
         onChangeText={(txt)=>{this.setState({City:txt})}}
        style={styles.input}
        />
        <TextInput
         placeholder="email"
         value={this.state.log_email}
         onChangeText={(txt)=>{this.setState({log_email:txt})}}
        style={styles.input}
        />
       
        <TouchableOpacity
                        style={styles.byyn}
                        onPress={() => {
                  this.props.navigation.navigate('Dashboard',
                  {
                  Fname:this.state.Fname,
                  Lname:this.state.Lname,
                  Age:this.state.Age,
                  College:this.state.College,
                  City:this.state.City,
                  Email:this.state.log_email
                            })
                        }} ><Text style={{fontSize:20}}>Login</Text></TouchableOpacity>
                        {/* <Button_Comp
                        title="Login"
                        call={}
                        /> */}
                        <Button_Comp
                        title="Save Data"
                        call={this.storeData}/>
      </View>
    );
  }
}

export default login;
const styles=StyleSheet.create({
    parent:{
        backgroundColor:"yellow",
        flex:1,
      
        alignItems:"center"  
    },
    input:{
        height:50,
        width:300,
        borderRadius:25,
        backgroundColor:"white",
        paddingLeft:10, 
    marginBottom:10   },
    byyn: {
      width: 290,
      height: 40,
      margin:20,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"orange",
      shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
      borderRadius:10
  },
 h_userText:{
      fontSize:20,
    }

})
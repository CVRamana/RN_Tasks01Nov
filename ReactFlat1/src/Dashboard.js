import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//import Button_Comp from '../src/Button_Comp'
import AsyncStorage from '@react-native-community/async-storage';
import Button_Comp from './Button_Comp';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      fn:'',
      ln:'',
      a:'',
      coll:'',
      city:'',
        };
  }

  getData = async () => {
    console.warn("getData")
    try {
      const value = await AsyncStorage.multiGet(['emailId','Fname','Lname','Age','College','City'])
      .then(res=>{
        this.setState({
         Email:res[0][1],
         fn:res[1][1],
         ln:res[2][1],
         a:res[3][1],
         coll:res[4][1],
         city:res[5][1]
        })
      })
      if (value !== null) {
        
      } else {
        alert("Bro nothing to Retrieve!!")
      }
    } catch (e) {
      alert("Bro nothing to Retrieve!!")
      console.warn("failed to get data" + e)
    }
  }

  clearData = async () => {
    try {
     // await AsyncStorage.removeItem('emailId');
     await AsyncStorage.clear()
     this.setState({
      Email: '',
      fn:'',
      ln:'',
      a:'',
      coll:'',
      city:'',
     })
     console.warn("data deleted")
    } catch (error) {
      alert("Nothing to delete")
      // Error retrieving data
      console.warn(error.message);
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    // const Fname = params ? params.Fname : null
    // const Lname = params ? params.Lname : null
    // const College = params ? params.College : null
    // const City = params ? params.City : null
    // const Age = params ? params.Age : null
    const Email = params ? params.Email : null;
    const id = params? params.id: null;
    return (
      <View style={styles.parent}>
        <Text style={{fontSize:20,fontWeight:"500"}}>Welcome to the  Dashboard </Text>
        <Text style={{fontSize:15,fontWeight:"400",color:"green"}}>{this.state.Email}</Text>
        {/* <Text style={{fontSize:15,fontWeight:"400",color:"green"}}>{this.state.Email}</Text> */}
        {/* <Text>{Fname}</Text>
        <Text>{Lname}</Text>
        <Text>{Age}</Text>
        <Text>{City}</Text>
        <Text>{College}</Text>
        <Text>{Email}</Text> */}
        <Button_Comp
          title="GetAsyncData"
          call={this.getData} />
        
        <Button_Comp
          title="Clear Async Data"
          call={this.clearData} />
          <Text>{this.state.Email}</Text>
        <Text>{this.state.fn}</Text>
        <Text>{this.state.ln}</Text>
        <Text>{this.state.a}</Text>
        <Text>{this.state.coll}</Text>
        <Text>{this.state.city}</Text>
         {/* <Text>{fn}</Text>
        <Text>{ln}</Text>
        <Text>{a}</Text>
        <Text>{city}</Text>
        <Text>{coll}</Text>
        <Text>{Email}</Text>  */}
      </View>
    );
  }
}


export default Dashboard;
const styles = StyleSheet.create({
  parent: {
    backgroundColor: "yellow",
    flex: 1,
    //justifyContent:"center",
    paddingTop:20,
    alignItems:"center"

  }

})

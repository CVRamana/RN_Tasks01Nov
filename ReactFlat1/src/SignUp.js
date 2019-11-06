import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput } from 'react-native';
import Button_Comp from './Button_Comp';
import AsyncStorage from '@react-native-community/async-storage';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:""
    };
  }
  //Storing the data
  // storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('emailId', this.state.email)
  //     console.warn("data saved success")
  //   } catch (e) {
  //     console.log("cant save the data" + e)
  //   }
  // }

  render() {
    return (
      <View style={styles.parent}>
        <Text> SignUp Here </Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={this.state.email}
        onChangeText={(txt)=>this.setState({email:txt})}
        />

        <Button_Comp
        title="SignIn"
        call={()=>this.props.navigation.navigate('login_async',{
              Email:this.state.email
        })
        }/>
      
      </View>
    );
  }
}

export default SignUp;
const styles=StyleSheet.create({
    parent:{
        backgroundColor:"yellow",
        flex:1,
      
        alignItems:"center"  
    },
    input:{
        height:50,
        width:200,
        backgroundColor:"white",
        paddingLeft:10,    }

})
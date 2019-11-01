import React, { Component } from 'react';
import {TextInput,Text,Image,Button,StyleSheet,
    View,
TouchableOpacity} from 'react-native'
//import Details from '../src/Details'

class login_form extends Component {
    constructor(props) {
      super(props)
      this.state = {
         username:'',
         password:'',
      };
    };
    
  render() {
      console.warn(this.state.username)
    return (
      <View style={styles.parent}>
          <Image
          style={styles.img}
          source={{uri:'https://images.pexels.com/photos/2346449/pexels-photo-2346449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
          <TextInput style={styles.text}
          onChangeText={(text) => this.setState({username:text})}/>
          <TextInput style={styles.text}
          onChangeText={(text) => this.setState({password:text})}/>

          <TouchableOpacity
          style={styles.byyn}
          onPress={()=>{this.props.navigation.navigate('Details',{
              username:this.state.username,
              password:this.state.password
          })}} >
              <Text style={{fontSize:20,color:"red"}}>Login</Text>
          </TouchableOpacity>
          </View>
    );
  }
}

export default login_form;
const styles=StyleSheet.create({
    parent:{
//justifyContent:"center",
paddingTop:30,
alignItems:"center",
backgroundColor:"yellow",
flex:1
    },
    text:{
        width:250,
        height:40,
        backgroundColor:"white",
        marginBottom: 20,
        borderRadius:20,
        paddingLeft: 14,
    },
    img:{
width:150,
height:150,
backgroundColor:"red",
marginBottom: 20,
borderRadius:75
    },
    byyn:{backgroundColor:"blue",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    width:100}
})
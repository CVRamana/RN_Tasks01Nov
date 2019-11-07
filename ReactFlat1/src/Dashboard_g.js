import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';
import Button_Comp from './Button_Comp';

class Dashboard_g extends Component {
  constructor(props) {
    super(props);
    GoogleSignin.configure();
    this.state = {
        Email:'',
        name:'',
        url:'',
    };
  }
  componentDidMount(){
this.getData()
  }
//clear Data
clearData = async () => {
    try {
     // await AsyncStorage.removeItem('emailId');
     await AsyncStorage.clear()
     this.setState({
      Email:'',
      name:'',
      url:'',
     },()=>{this.props.navigation.navigate('Google')})
     console.warn("data deleted")
    } catch (error) {
      alert("Nothing to delete")
      // Error retrieving data
      console.warn(error.message);
    }
  }




//Sign Out
signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  //revoke
  revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };

//getting data from Async
getData = async () => {
    try {
      const value = await AsyncStorage.multiGet(['email','name','url'])
      .then(res=>{
         // alert(res)
        this.setState({
         Email:res[0][1],
         name:res[1][1],
         url:res[2][1],
        })
      })
     
    } catch (e) {
      alert("nothing to Retrieve!!")
      console.warn("failed to get data" + e)
    }
  }



  render() {
      const {params}=this.props.navigation.state
      const un= params? params.name:null;
      const em= params? params.email:null;
      const ph= params ? params.photo:null;

    return (
      <View style={styles.parent}>
          <Text style={styles.txt}> Welcome </Text>
       <Image
       style={styles.img}
       source={{uri:this.state.url?this.state.url:'../Images/plus.png'}}
       />
        <Text style={styles.txt1}> {this.state.name}</Text>
        <Text style={styles.txt3}> {this.state.Email}</Text>
        <Button_Comp
        title="Clear Data"
        call={this.clearData}/>
        {/* <Text>{this.state.name}</Text>
        <Text>{this.state.Email}</Text>
        <Text>{this.state.url}</Text> */}
       
      </View>
    );
  }
}

export default Dashboard_g;
const styles=StyleSheet.create({
parent:{
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom:20 ,
  },
  img:{
      height:150,
      width:150,
      borderRadius:100,
      backgroundColor:"pink",
      marginBottom:20 ,
  },
  txt:{
      fontSize:25,
      fontWeight:"700",
      color:"green",
      marginBottom: 20,
  },
  txt1:{
    fontSize:20,
    fontWeight:"300",
    color:"red",
    marginBottom: 10,
},
txt3:{
    fontSize:20,
    fontWeight:"200",
    color:"blue",
    marginBottom: 20,
}
})
import React, { Component } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from "react-native-fbsdk";
import firebase from 'react-native-firebase'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

class Facebook11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accToken:'',
      perm:"",
      uid:''
    };
  }

//config the google sign in 

componentDidMount(){
  GoogleSignin.configure({
    iosClientId:'652275210210-n4hpr3qnlab11v3ffd163svfoq4o529c.apps.googleusercontent.com',//only for ios
  })
//   .then(()=>{
//     console.log("fgdghsf")
// // call the currentUserAsync() 
//   })
}



// Facebook login Action
onLoginFacebook=()=>{
  LoginManager.logInWithPermissions(["public_profile","email"])
  .then((result)=> {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } 
        console.log(result)
        console.log( "Login success with permissions"+result.grantedPermissions.toString() )
        return AccessToken.getCurrentAccessToken()
    }, )

  .then(data=>{
const credentials=firebase.auth.FacebookAuthProvider.credential(data.accessToken)
return firebase.auth().signInWithCredential(credentials)
  })
  .then(currentUser=>{
console.log("Facebook login with the user : ",JSON.stringify(currentUser))
  })
  .catch(err=>{
    console.log(err)
  })

}

// Google Login Action
onLoginGoogle=()=>{
  GoogleSignin
  .signIn()
  .then((data)=>{
    const credentials=firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken)
    return firebase.auth().signInWithCredential(credentials)
  })
  .then((currentUser)=>{
console.log("Current user with the credential : ",JSON.stringify(currentUser))
  })
  .catch((err)=>{
    console.log("Google login failed with error : ",err)
  })

}


  render() {
    return (
      <View style={styles.parent}>
        <Text> Facebook11 </Text>
      
            <Text>
              {this.state.accToken}
            </Text>
            <Text>
              {this.state.perm}
            </Text>
            <Text>
              {this.state.uid}
            </Text>
            <Button
            title="Login with facebook"
            onPress={this.onLoginFacebook}
            />
        
        <Button
            title="Login with Google"
            onPress={this.onLoginGoogle}
            />
      </View>
    );
  }
}

export default Facebook11;
const styles=StyleSheet.create({
  parent:{
    alignItems:"center",
    flex: 1,
    paddingTop:40,
    backgroundColor:"yellow"
  },
  fbbtn:{
    height:50,
    width:200,

  }
})

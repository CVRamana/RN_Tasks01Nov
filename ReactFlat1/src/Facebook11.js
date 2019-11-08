import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from "react-native-fbsdk";

class Facebook11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accToken:'',
      perm:"",
      uid:''
    };
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text> Facebook11 </Text>
        <LoginButton
        style={styles.fbbtn}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
//permission
// LoginManager.logInWithPermissions(["public_profile"]).then(
//   function(result) {
//     if (result.isCancelled) {
//       console.log("Login cancelled");
//     } else {
//       console.log(result)
//       console.log(
//         "Login success with permissions: " +
//           result.grantedPermissions.toString()
//       );
//     }
//   },
//   function(error) {
//     console.log("Login fail with error: " + error);
//   }
// );

                console.log(result)
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log("My access token",data.accessToken.toString())
                    console.log(data)
                    this.setState({accToken:data.accessToken,
                    perm:data.permissions,
                    uid:data.userID})
                  }
                )
              }
            }
          }
          onLogoutFinished={() =>{ 
            console.log("logout.")
          }
            }/>
            <Text>
              {this.state.accToken}
            </Text>
            <Text>
              {this.state.perm}
            </Text>
            <Text>
              {this.state.uid}
            </Text>
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

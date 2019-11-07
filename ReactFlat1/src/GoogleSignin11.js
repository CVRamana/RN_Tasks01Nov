import React, { Component } from 'react';
import { View, Text ,StyleSheet,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-community/google-signin';


class GoogleSignin11 extends Component {
  constructor(props) {
    GoogleSignin.configure();
    super(props);
    this.state = {
      isSigninInProgress:false,
      isLoaded:false,
      user:'',
    
    };
  }

  
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    
      this.setState({
        user:JSON.stringify(userInfo.user.name),
        isLoaded:true
      });
     
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.parent}>
            <GoogleSigninButton
    style={styles.ggl}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.signIn}
    disabled={this.state.isSigninInProgress} />
    <Text style={styles.txt}>{this.state.user}</Text>
  { this.state.isLoaded ? this.props.navigation.navigate('Dashboard_g') : <ActivityIndicator />}
       
      </View>
    );
  }
}

export default GoogleSignin11;
const styles=StyleSheet.create({
  parent:{
    alignItems: 'center',
    paddingTop: 50,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom:20 ,
  },
  ggl:{
      width: 250,
      height: 48 ,
      borderRadius:10,
      marginBottom:30

    },
    txt:{
      fontSize:20,
      margin:10,
    }

})

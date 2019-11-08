import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';


class GoogleSignin11 extends Component {
  constructor(props) {
    GoogleSignin.configure();
    super(props);
    this.state = {
      isSigninInProgress: false,
      isLoaded: false,
      user: '',
      isAct: false,
      name: '',
      email: '',
      img_url: ''

    };
  }


  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        user: JSON.stringify(userInfo.user),
        isLoaded: true,
        isAct: true,
        name: userInfo.user.name,
        email: userInfo.user.email,
        img_url: userInfo.user.photo,
      });

      await AsyncStorage.multiSet([
        ['email', userInfo.user.email],
        ['name', userInfo.user.name],
        ['url', userInfo.user.photo],
      ]);

      setTimeout(() => {
        this.setState({isAct: false})
        this.props.navigation.navigate('Dashboard_g', {
          name: userInfo.user.name,
          email: userInfo.user.email,
          photo: userInfo.user.photo,
        })
        
      }, 2000);

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


  render() {
    return (
      <View style={styles.parent}>
        <GoogleSigninButton
          style={styles.ggl}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          disabled={this.state.isSigninInProgress} />

          {this.state.isAct ? <ActivityIndicator size="large" color="green" /> : null}

      </View>
    );
  }
}

export default GoogleSignin11;
const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    paddingTop: 50,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  ggl: {
    width: 250,
    height: 48,
    borderRadius: 10,
    marginBottom: 30

  },
  txt: {
    fontSize: 20,
    margin: 10,
  }

})

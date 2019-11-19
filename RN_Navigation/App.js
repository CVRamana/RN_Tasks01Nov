import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from './Screens/LoginScreen'
import HomeScreen  from "./Screens/Homescreen";
import Signin from './Screens/Signin'

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
            <Text>Welcome Screen!!!</Text>
            <Button
            title="Login"
            onPress={()=>this.props.navigation.navigate('login')}
            />
             <Button
            title="Signin"
            onPress={()=>this.props.navigation.navigate('Signin')}
            />
            
           
            </View>
    );
  }
}
const AppNavigator=createStackNavigator(
    {
        App:App,
        login:LoginScreen,
        Home:HomeScreen,
        Signin:Signin
      },
     {
        initialRouteName: 'App',
      },
      
    
)
export default createAppContainer(AppNavigator)


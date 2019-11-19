import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Notification from "./Notification";

class Signin extends Component {
  
    static navigationOptions={
       header:null,
       drawerLabel: 'Home',
       drawerIcon: ({ tintColor }) => (
         <Image
           source={require('../Images/home.png')}
           style={[styles.icon, { tintColor: tintColor }]}
         />
       ),

    }

  render() {
    return (
      <View style={{
          alignItems:"center",
          paddingTop:90,
          //justifyContent:"center",
          //flex:1,
          backgroundColor:"#f27896",

      }}>
        <Text> Signin </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

  const MyDrawerNavigator = createDrawerNavigator(
      {
          Signin:Signin,
    Notification:Notification
  },
  {
    initialRouteName: 'Signin',
  },
  );
  
  
export default createAppContainer(MyDrawerNavigator);
 

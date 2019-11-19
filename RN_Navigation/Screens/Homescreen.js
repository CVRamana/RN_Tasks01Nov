import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from "react-navigation";
import Settings from './Settings'
import Details from "./Details";
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()
class Homescreen extends Component {
    static navigationOptions={
       
    }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{paddingTop:50,backgroundColor:"#f783",flex:1}}>
        <Text> Homescreen </Text >
        <Button
        title="Goto Login"
        onPress={()=>this.props.navigation.navigate('login')}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
    {
    Home: Homescreen,
    Settings: Settings,
    Details:Details,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
         // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        }
        else if (routeName === 'Details') {
            iconName = `ios-apps`;
          }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
  
  export default createAppContainer(TabNavigator);


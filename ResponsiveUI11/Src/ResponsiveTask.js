import React, { Component } from 'react';
import { View, Text,StyleSheet ,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResponsiveUI from './ResponsiveUI'
import Todo from './Todo'
import Mobx_Task2 from './Mobx_Task2'
import TodoApp from './TodoApp'
import Todo_Screen1 from './Todo_Screen1';
import Google_Map from './Google_Map'
import GameApi from './GameApi';
import TabBar11 from './TabBar11'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RNnavigation from './RNnavigation'

class ResponsiveTask extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text> ResponsiveTask </Text>
        <Button title="MobX"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('Mobx')}
        />
          <Button title="ResponsiveUI"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('UI')}
        />
        <Button title="Mobx_Taks2"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('Mobx_task')}
        />
         <Button title="TodoApp"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('Todo2')}
        />
        <Button title="Google Map"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('Google_Map')}
        />

         <Button title="Game"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('Game')}
        />
        <Button title="TabBar"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('tab')}
        />
        <Button title="React Naviagtion"
        style={styles.bttn_nav}
        onPress={()=>this.props.navigation.navigate('RN_nav')}
        />
        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
   
    {
        Home: ResponsiveTask,
        UI: ResponsiveUI,
        Mobx:Todo,
        Mobx_task:Mobx_Task2,
        Todo2:TodoApp,
        Screen2:Todo_Screen1,
        Google_Map:Google_Map,
        Game:GameApi,
        tab:TabBar11,
        RN_nav:RNnavigation

      },
      {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },

      },   
      )
  
export default createAppContainer(AppNavigator);

const styles=StyleSheet.create({
parent:{
   alignItems:"center",
   flex:1,
   paddingTop:50,
   backgroundColor:"pink"
},
bttn_nav:{
    height:30,
    width:100,
    backgroundColor:"black"
}
})

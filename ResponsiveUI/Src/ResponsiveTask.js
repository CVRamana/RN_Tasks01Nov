import React, { Component } from 'react';
import { View, Text,StyleSheet ,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResponsiveUI from './ResponsiveUI'
import Todo from './Todo'

class ResponsiveTask extends Component {
    static navigationOptions = {
        title: 'Home',
    }
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
        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
   
    {
        Home: ResponsiveTask,
        UI: ResponsiveUI,
        Mobx:Todo
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

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> RNnavigation </Text>
      </View>
    );
  }
}

export default createStackNavigator({
    Nav_login:{
        screen:loginScreen
    }
});

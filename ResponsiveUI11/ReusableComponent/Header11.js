import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

class Header11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flexDirection:"row",padding:20,}}>
        {/* <Text> Header11 </Text> */}
        <TextInput
        style={{height:40,width:300,
           
            backgroundColor:"yellow",
            paddingLeft:10,
            borderRadius:20,
    }}
        placeholder="Enter the Game id to fetch the details...."
        onChangeText={this.props.inputcall}
        value={this.props.val}
        />
        <Button
        title="Search"
        onPress={this.props.call}
        />
      </View>
    );
  }
}

export default Header11;

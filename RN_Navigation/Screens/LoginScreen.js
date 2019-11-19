import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';


export default class LoginScreen extends Component {
 
static navigationOptions={
    header:null
}
  render() {
    return (
      <View style={{paddingTop:60}}>
        <Text> LoginScreen </Text>
        <Button 
        title="Go to Homescreen"
        onPress={()=>this.props.navigation.navigate('Home')}
        //goback()
        //push()=>pushes the naviagtion screen in stack ,doesnt matter it is present or not??
        //navigate()= smart enough
        //popToTop()=>goes to the fisrt screen
        />
      </View>
    );
  }
}

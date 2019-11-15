import React, { Component } from 'react';
import { View, Text,Animated,Easing,StyleSheet,} from 'react-native';
//import Animated from 'react-native-reanimated';

class TabSettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.position=new Animated.ValueXY({x:0,y:0})
    Animated.timing(this.position,{
      toValue:{x:200,y:250},
      duration:4000,

    }).start()
  }
  myRotation(){
    this.rotate1=this.position.x.interpolate({
      inputRange:[0,50],
      outputRange:["0deg","360deg"]
    })
    return{
      ...this.position.getLayout(),
      transform:[{rotate:this.rotate1}]
    }
  }

  render() {
    return (
      <Animated.View style={this.myRotation()}>
      <View style={styles.ball}/>
      <Text> raman</Text>
      </Animated.View>
    );
  }
}

export default TabSettingsScreen;
const styles = StyleSheet.create({
  ball: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  }
})
import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
///import styles from '../Constants/styles';

class TabHomeScreen extends Component {
  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY(0, 0)
    //Animated.spring()
    // Animated.timing(this.position,{
    //   toValue:{x:300,y:500},
    //   duration:3000,
    //   easing:Easing.circle
    //   easing:Easing.elastic(7)
    //   stiffness:300
    // }).start()
  }
  componentDidMount() {
    this.MyAnimation()
  }
  MyAnimation() {
    this.position.setValue({ x: 0, y: 0 })
    // for manualy set the position of the=> when it is called second time the position will be set to (0,0) 
    Animated.timing(this.position, {
      toValue: { x: 300, y: 500 },
      duration: 4000,
      easing: Easing.elastic(7)
      // stiffness:300
    })
      .start(() => this.MyAnimation())  //infinite loop
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

export default TabHomeScreen;
const styles = StyleSheet.create({
  ball: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  }
})
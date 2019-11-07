import React, { Component } from 'react';
import { View, Text,Animated,StyleSheet,TouchableHighlight,Easing } from 'react-native';

class Animations extends Component {
  constructor(props) {
    
        super()
        this.animatedValue1 = new Animated.Value(0)
        this.animatedValue2 = new Animated.Value(0)
        this.animatedValue3 = new Animated.Value(0)
      
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)        
    ]).start()
  }


  render() {
    const scaleText = this.animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 2]
      })
      const spinText = this.animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
      })
      const introButton = this.animatedValue3.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 400]
      })
    return (
        <View style={[styles.container]}>
        <Animated.View 
          style={{ transform: [{scale: scaleText}] }}>
          <Text style={{fontSize:28,fontWeight:"bold",color:"green"}}>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
          <Text
            style={{fontSize: 20,color:"red"}}>
            to the App!
          </Text>
        </Animated.View>
        <Animated.View
          style={{top: introButton, position: 'absolute'}}>
          <TouchableHighlight
            onPress={this.animate.bind(this)}
            style={styles.button}>
            <Text
              style={{color: 'white', fontSize: 20}}>
              Click Here To Start
            </Text>
         </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

export default Animations;
const styles=StyleSheet.create({
    container:{
        flex:1,
       // justifyContent:"center",
        alignItems:"center",
        paddingTop:80,
        backgroundColor: "orange",
    }

})
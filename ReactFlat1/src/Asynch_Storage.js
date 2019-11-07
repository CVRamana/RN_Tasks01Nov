import React, { Component } from 'react';
import { View, Text,Animated,StyleSheet,TouchableHighlight,Easing } from 'react-native';
import Button_Comp from '../src/Button_Comp'
import AsyncStorage from '@react-native-community/async-storage';


class Asynch_Storage extends Component {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
    this.state = {
      email1:''
    };
  }
  componentDidMount(){
    AsyncStorage.getItem('emailId', (err, result) => {
      //alert(result)
      this.setState({email1: result})})
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
          toValue: 2,
          duration:2,
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
      <View style={styles.parent}>
        <Text style={{fontSize:20,fontWeight:"500",color:"green"}}> Splah Screen </Text>
        <Text> {this.state.email1}</Text> 
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
        </Animated.View>
        
 {(this.state.email1 !== null)?this.props.navigation.navigate('Dashboard') : this.props.navigation.navigate('SignUp')}
               <Button_Comp
                title="Sign Up"
                call={() => this.props.navigation.navigate('SignUp')}
                />
      </View>

    );
  }
}

export default Asynch_Storage;
const styles=StyleSheet.create({
  parent:{
    flex:1,
  //  justifyContent:"center",
    alignItems:"center",
    paddingTop:30
  }

})
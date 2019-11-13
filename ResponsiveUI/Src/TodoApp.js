import React, { Component } from 'react';
import { 
  View, 
  Animated,
   Easing,
} from 'react-native';


export default class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.springValue = new Animated.Value(0.3)
    this.state = {
    
    }
  }
//lifecycle method
componentDidMount() {
    this.animate()
  }
  
animate = () => {
  this.animatedValue.setValue(0)
  this.springValue.setValue(0.3)
  Animated.sequence([
    Animated.timing(
      this.animatedValue,{
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(()=>{this.props.navigation.navigate('Screen2')}),
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  ])

}

  render() {

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })

    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center',}}>
        <Animated.Text style={{
             opacity, fontSize: 50, 
             color: '#1cad9a', fontWeight: 'bold',
              top: 300,transform: [{scale: this.springValue},{rotateX}]}}>
          Raman
          </Animated.Text>
        </View>
      </View>
      
    );
  }
}
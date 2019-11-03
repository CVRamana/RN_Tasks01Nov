import React, { Component } from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';

const ToHideAndShowComponent = () => (
    <View>
        <Text>Hey i am peeping in and out!!!!</Text>
    </View>
);

class Show_Hide extends Component {
  constructor(props) {
    super(props);
    this.state = {isHidden: false};
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({isHidden: !this.state.isHidden})
  }//constructor
  render() {
    return (
      <View style={styles.myStyle}>
        {this.state.isHidden ? <ToHideAndShowComponent/> : null}
        <Button title={this.state.isHidden ? "Hide" : "Show"} onPress={this.onPress} />
      </View>
    );
  }
}
const styles=StyleSheet.create({
    myStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
export default Show_Hide;

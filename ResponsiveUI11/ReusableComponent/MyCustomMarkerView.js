import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
//import styles from '../Constants/styles';

class MyCustomMarkerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styles.marker}>
            </View>
      </View>
    );
  }
}

export default MyCustomMarkerView;
const styles=StyleSheet.create({
    marker: {
        height: 20,
        width: 20,
        backgroundColor: "red",
        borderRadius: 15,
      }
})
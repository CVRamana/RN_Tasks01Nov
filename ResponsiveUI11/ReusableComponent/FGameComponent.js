import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class FGameComponent extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={styles.row111}>
        <Text> FGameComponsent </Text>
        <Text> {this.props.id} </Text>
        <Text> {this.props.date} </Text>
        {/* <Button 
        title="Delete"
        onPress={this.props.delete}/> */}
      </View>
    );
  }
}

export default FGameComponent;
const styles=StyleSheet.create({
    row111:{
        backgroundColor: "pink",
        margin: 10,
    }
})

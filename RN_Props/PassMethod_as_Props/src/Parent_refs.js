import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Refs from './Refs'

class Parent_refs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text> Parent_refs </Text>
        <Refs
        
        />
      </View>
    );
  }
}

export default Parent_refs;
const styles=StyleSheet.create({
    parent:{
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
    }
  })
  
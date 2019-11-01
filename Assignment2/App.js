/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Assignment2 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />

        <View style={{ flex: 1, backgroundColor: 'red', justifyContent:"space-around" }}>

        <View style={{ flex: .60,flexDirection:"row",justifyContent:"space-around",
        backgroundColor: 'red',
        }} > 
        <View style={{flex:.60,backgroundColor:"blue",justifyContent:"space-around"}}/>
        </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }} />
      </View>
    );
  }
};


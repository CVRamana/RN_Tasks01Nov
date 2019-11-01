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
  Image,
  StatusBar,
} from 'react-native';

export default class ViewAssignment2 extends Component {
  render() {
    return (
      <View style={{
        flex: .25,
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "row"
      }}>
        <View style={{ flex: 2, }} >
          <Image style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{ uri: 'https://images.pexels.com/photos/2891541/pexels-photo-2891541.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }} />
        </View>

        <View style={{ flex: 5, flexDirection: "column" }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Devil of Diamonds! </Text>
          <Text style={{ fontSize: 15 }}>The Audible Rupture </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, paddingRight: 10 }}>
          <Text style={{ fontSize: 15 }}>4:10</Text>
        </View>


      </View>
    );
  }
}
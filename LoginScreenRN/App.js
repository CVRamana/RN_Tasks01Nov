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
  TouchableOpacity,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

export default class LoginScreenRN extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 2, backgroundColor: "cyan", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 27 }}>
            Login Screen !
    </Text>
        </View>
        <View style={{
          flex: 2,
          backgroundColor: "pink",
        }}>

          <View style={{
            flex: 1,
            backgroundColor: "lightgrey",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
            flexDirection: "row"
          }}>
            <Text style={{ fontSize: 20, paddingTop: 10, marginRight: 30 }}>Name: </Text>
            <TextInput style={{ backgroundColor: "white", height: 50, width: 250, borderRadius: 20, paddingLeft:10,fontSize:25 }} placeholder="Enter the Name">
            </TextInput></View>

          <View style={{
            flex: 1,
            backgroundColor: "lightgrey",
            paddingRight: 10,
            // alignItems: "center",
            paddingLeft: 10,
            flexDirection: "row"
          }}>
            <Text style={{ fontSize: 20, paddingTop: 10,fontSize:20 }}>Password: </Text>
            <TextInput style={{ backgroundColor: "white", height: 50, width: 250, borderRadius: 20,paddingLeft:10 ,fontSize:25}} placeholder="*********">
            </TextInput></View>

        </View>
        <View style={{ flex: 4, backgroundColor: "lightgrey", alignItems: "center"}}>
          {/* <Button title="Submit" >
           
         </Button> */}
          <TouchableOpacity style={{ width: 330, height: 60, backgroundColor: "green", justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
            <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
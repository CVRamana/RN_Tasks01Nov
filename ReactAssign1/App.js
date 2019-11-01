/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Picker
} from 'react-native';

export default class ReactAssign1 extends Component {
  render() {
    let pic = {
      url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }
    return (
      <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "red",
        paddingTop: 35,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
      }} >
        <Text style={{

          fontSize: 20,
          marginBottom: 10,
        }}>
          Different Varities!
        </Text>

        <Image source={pic} style={{
          width: 194,
          height: 194,
          borderRadius: 97,
          marginBottom: 10,
        }} />

        <Text style={{
          textShadowColor: "red",
          fontSize: 18,
          marginBottom: 10
        }} >
          Enter Name:
          </Text>

        <TextInput style={{
          width: 200,
          height: 50,
          borderRadius: 10,
          backgroundColor: "cyan",
          marginBottom: 10,
          paddingLeft: 10,
          fontSize:20,
        }}
        placeholder={
          "Enter name"
        }
        />
        {/* <Button style={{
          color: "green",
          height: 100,
          width: 100
        }}
          title="Submit"
        /> */}
          <TouchableOpacity
          style={{ height: 50, width: 200, backgroundColor: "yellow", justifyContent: "center", alignItems:"center",
        borderRadius:10 }}
          onPress={() => console.warn("Button Presses")}
        >
          <Text style={{}}>Submit</Text>
        </TouchableOpacity>

        <Picker
        style={{height: 50, width: 100}}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C" value="C" />
          <Picker.Item label="Script" value="javaScript" />
          <Picker.Item label="Script" value="javaScript" />
          <Picker.Item label="Script" value="javaScript" />
          <Picker.Item label="Script" value="javaScript" />
          <Picker.Item label="Script" value="javaScript" />
          

        </Picker>

      

      </View>
    );
  }
}



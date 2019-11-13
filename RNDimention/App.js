/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
 
export default class App extends React.Component {

  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.responsiveBox}>
        <View style={{backgroundColor:"red",flex:1,
        paddingLeft:10
      }}
        >
          <Text 
         // numberOfLines={3}
           style={styles.text}>This box is always of 84.5% width and 17% height.</Text>
          </View>
          <View style={{backgroundColor:"green",flex:1,
          paddingLeft:10
        }}
          >
             <Image/>
          <Text style={styles.text}>Test it by running this example repo in phones/
            emulators with screens of various dimensions and pixel per inch (ppi).</Text>
        </View>

        <View>

          </View>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: 'gray',
    paddingTop:50,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  responsiveBox: {
      width: wp('100%'),
    // height: hp('30%'),
    borderWidth: 2,
    backgroundColor:"pink",
    borderColor: 'orange',
     flexDirection: 'row',
    //justifyContent: 'space-around' 
  },
  text: {
    color: 'white',
    
  }
});
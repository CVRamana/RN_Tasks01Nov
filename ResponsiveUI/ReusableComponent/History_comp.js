import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Constants/styles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const History_comp = (props) => (
    <View style={[styles.history_content, props.extraStyle]}>
        <View style={{
            justifyContent:"center",
            width: wp('50%'),
            //paddingRight:125,
        //backgroundColor:"pink"
        }}> 
            <Text>Add Review</Text>
            <Text>13/10/2020</Text>
            </View>
            <View style={{
                justifyContent:"center",
                alignItems:"center",
                width: wp('50%'),
                //paddingLeft:50
            }}>
            <Text style={{
                //marginTop:8,
                color:"red",
               }}>40000000 VND</Text>
            </View>
    </View>
);

export default History_comp;

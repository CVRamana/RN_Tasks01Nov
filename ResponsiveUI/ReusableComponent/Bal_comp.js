import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Constants/styles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

const Bal_comp = (props) => (
    <View style={{flexDirection:"row",
    padding: 10,
   // width: wp('100%'),
    }}>
        {/* <Text>Bal_comp</Text> */}
        <View  style={{justifyContent:"center",
        alignItems:"center",
       // backgroundColor:"pink",
        paddingLeft: 10,
        width: wp('50%'),}}>
        <Text >Balance</Text>
        <Text style={{color:"#00886f",fontSize:17}}>476357654 VND</Text>
        </View>
        
        <View style={{justifyContent:"center",alignItems:"center",
       // backgroundColor:"grey",
        padding: 10,
        width: wp('50%'),}}>
        <Text >Balance Used</Text>
        <Text style={{color:"#00886f",fontSize:17}}>969384698VND</Text>
        </View>
    </View>
);

export default Bal_comp;

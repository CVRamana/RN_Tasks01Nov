import React from 'react';
import { Text, View,Image } from 'react-native';
import styles from '../Constants/styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
  

const Relative_Img = (props) => (

    <View style={{justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor:"pink",
    width: wp('20%'),
    
    }}>
       <Image
       style={[styles.rel_img,props.extraStyle]}
       source={props.url}
       />
       <Image
       style={{height:20,width:20,
        marginLeft: 9,
        marginTop:-5,
       // backgroundColor:"green"
    }}
        source={props.url1}
       />
       <Text style={{paddingLeft: 3,
    marginTop:5}}>{props.rname}</Text>
    </View>
);

export default Relative_Img;

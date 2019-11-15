import React, { Component } from 'react';
import { View, Text,TouchableOpacity,props,Image } from 'react-native';
import styles from '../Constants/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

class Health_Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flexDirection:"row",
      borderRadius:10,

      }}>
        <View style={{
          justifyContent:"center",
          width: wp('50%'),
        }}>
        <Text style={{fontSize:20}}> {this.props.txt} </Text>
        </View>

        <View style={{flexDirection:"row",
      // backgroundColor:"pink",
       justifyContent:"center",
        //marginLeft:30,
        width: wp('50%')}}>
         
        <TouchableOpacity
        style={styles.HI_btn}
        onPress={this.props.call}
        >
            <Text> {this.props.title}
                </Text>
            </TouchableOpacity>
            <Image
           style={{height:20,
            width:20,
            marginLeft: -23,
            marginTop:4,
            //backgroundColor:"red",
        }}
           source={this.props.arrow}
            />
            </View>
        
      </View>
    );
  }
}

export default Health_Insurance;

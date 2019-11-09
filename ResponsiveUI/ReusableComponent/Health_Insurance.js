import React, { Component } from 'react';
import { View, Text,TouchableOpacity,props,Image } from 'react-native';
import styles from '../Constants/styles';

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
//       shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,

// elevation: 5,
     // margin:10
      }}>
        <View>
        <Text style={{fontSize:20}}> {this.props.txt} </Text>
        </View>

        <View style={{flexDirection:"row",
       // backgroundColor:"pink",
        marginLeft:30}}>
         
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

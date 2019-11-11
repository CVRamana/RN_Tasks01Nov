import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Flat_comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.fv}>
            <Text style={{fontSize:20}}>{this.props.id+1}: </Text>

        <Text style={{fontSize:20}}>{this.props.x}</Text>
        </View>
    );
  }
}

export default Flat_comp;
const styles=StyleSheet.create({
    fv:{
        //justifyContent: 'center',
        flexDirection:"row",
        width:350,
        height:50,
        borderRadius:25,
        paddingLeft: 13,
        alignItems: 'center',
        margin: 6,
        backgroundColor:"orange",
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
      
      },
})

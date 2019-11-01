import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'

class Button_Comp extends Component {
    render() {
        return (
          //  <View>
                <TouchableOpacity style={styles.bttn}
                    onPress={this.props.call} >
                    <Text
                    style={{
                        fontSize:20,
                      }}
                    >{this.props.title}</Text>
                </TouchableOpacity>
          //  </View>
        );
    }
}

export default Button_Comp;
const styles = StyleSheet.create({
    bttn: {
        width: 290,
        height: 40,
        margin:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
        borderRadius:10
    }
})


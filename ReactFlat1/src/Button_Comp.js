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
        width: 110,
        height: 30,
        margin:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange",
        borderRadius:10
    }
})


import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import styles from '../src/css/styles'
class Button_Comp extends Component {
    render() {
        return (
          //  <View>
                <TouchableOpacity style={styles.btn_bttn}
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



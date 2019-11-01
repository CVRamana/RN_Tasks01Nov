import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet,
    TouchableOpacity,
    FlatList
  } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

export default class componentName extends Component {
  static navigationOptions = {
    title: 'Camera',
  };

constructor(props) {
  super(props)
  this.state = {
     clicked:''
  };
};
    handleTap = () => {
        ImagePicker.openCamera({
            cropping: true,
          }).then(image => {
            console.log(image);
            this.setState({
            clicked:image.path
            })
          });
      }

  render() {
    return (
      <View style={styles.parent}> 
           <TouchableOpacity
          style={styles.bttn}
          onPress={this.handleTap}
        >
          <Image
            style={styles.img}
            source={{ uri: this.state.clicked }}
          />
        </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
    parent: {
      backgroundColor: "yellow",
      alignItems: "center",
      paddingTop: 40,
    },
    bttn: {
      width: 200,
      height: 200,
      backgroundColor: "red",
      
    },
    img: {
      width: 200,
      height: 200
    },
    flat: {
  
    }
  })
  
import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet,
    TouchableOpacity
}
    from 'react-native'

import ImagePicker from 'react-native-image-crop-picker';

class Image_picker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
        };
    };

    handleTap = () => {
        ImagePicker.openPicker({
            height:40,
            width:50,
            cropping: true
          }).then(image => {
            console.log(image);
            this.setState({
                source:image.path
            })
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[{backgroundColor: 'red'}, styles.img]} onPress={this.handleTap} >
                    <Image
                        style={styles.img}
                        source={{ uri: this.state.source }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Image_picker
const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 100
    },
    container: {
        paddingTop: 50,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }

})

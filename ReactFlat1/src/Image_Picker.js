import React, { Component } from 'react';
import {
    View, Image,
    StyleSheet,
    TouchableOpacity
      } from 'react-native'
      import myPicker from '../src/components/ImagePicker_reusable'
import ImagePicker from 'react-native-image-crop-picker';
import mypicker from '../src/components/ImagePicker_reusable';
class Image_picker extends Component {
    static navigationOptions = {
        title: 'Pick 1 Image',
      };
    constructor(props) {
        super(props)
        this.state = {
            source: '',
        };
    };

    handleTap = () => {
        mypicker.getOnePick((responce)=>{
            this.setState({
               source:responce
            })
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[{backgroundColor: 'red'}, styles.img]}
                 onPress={this.handleTap} >
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

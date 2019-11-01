import React, { Component } from 'react';
import {
  View, Text, Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,Button
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
export default class Image_multi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: [],
      images: null
    };
  };

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.warn('received image', i.path);
          return {
            uri: i.path,
            width: i.width,
            height: i.height,
            mime: i.mime
          };
        })
      });
    }).catch(e => alert(e));
  }
  render() {
    console.log(this.state.source.path)
    return (
      <View>
        <View style={styles.parent}>
          <TouchableOpacity
            style={styles.bttn}
            onPress={this.pickMultiple.bind(this)}
          >
            <Text>Pick Multiple</Text>
          </TouchableOpacity>


          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />


        </View>
        <View style={{height:200,backgroundColor:"pink"}}>
          <FlatList
          //  style={{ backgroundColor: 'green' }}
            data={this.state.images}
            renderItem={
              ({ item }) => {
                <View>
                <Image
                  style={styles.img}
                  source={{ uri: item.uri }}
                /> 
                <Text>jhgjhv</Text>
                <Text>jhgjhv</Text>
                <Text>jhgjhv</Text>
                </View>}
            }
            keyExtractor={(item)=>item.uri} />
        </View>
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
    backgroundColor: "yellow",
    width: 200,
    height: 200,
    backgroundColor: "red"
  },
  img: {
    width: 200,
    height: 200
  },
  flat: {

  }
})

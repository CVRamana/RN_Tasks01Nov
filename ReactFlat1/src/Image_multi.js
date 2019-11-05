import React, { Component } from 'react';
import {
  View, Text, Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,Button
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
export default class Image_multi extends Component {
  static navigationOptions = {
    title: 'Gallery',
    headerBackTitle:'Go Back'
  };

  constructor(props) {
    super(props)
    this.state = {
      source: [],
      //images: null
    };
  };

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      let temp=[]
      images.forEach((item)=>{
        let myImage={
          uri:item.path
        }
        temp.push(myImage)
      })
      this.setState({
      source:temp
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
        <View style={{backgroundColor:"pink",
        padding:10,
        }}>
          <FlatList
          numColumns={3}
            data={this.state.source}
            renderItem={ ({ item }) => { 
              return (
              <Image style={styles.img}
                 source={{ uri: item.uri }}
              />  )
                }
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
    width: 100,
    height: 100,
    backgroundColor:"blue",
    margin:15,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 22,
  },
  flat: {
  }
})

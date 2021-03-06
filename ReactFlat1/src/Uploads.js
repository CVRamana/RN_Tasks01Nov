import React, { Component } from 'react';
import { View, Text, TouchableOpacity,ActivityIndicator, Image } from 'react-native';
//import ImagePicker from 'react-native-image-crop-picker';
import myPicker from '../src/components/ImagePicker_reusable'
import styles from '../src/css/styles'
import { RNS3 } from 'react-native-aws3';


class Uploads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: 'https://image.shutterstock.com/image-vector/upload-folder-icon-flat-illustration-600w-1425977081.jpg',
      downloaded: 'https://image.shutterstock.com/image-vector/vector-icon-download-sign-inside-600w-116113897.jpg',
      isLoaded:false
    };
  }

  Upload_file = () => {
    if(this.state.source==='https://image.shutterstock.com/image-vector/upload-folder-icon-flat-illustration-600w-1425977081.jpg'){
      alert("Can't upload an empty file");
      return
    }
    this.setState({
      isLoaded:true,
      progress:0
    })
    const file = {
      uri: "file://" + this.state.source,
      name: "image.png",
      type: "image/png"
    }

    const options = {
      keyPrefix: "uploads/",
      bucket: "appinventiv-development",
      region: "us-east-1",
      accessKey: "AKIAJ3UHQTWRRT2AH3RA",
      secretKey: "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",
      successActionStatus: 201
    }

    RNS3.put(file, options).progress((e)=>{
      //console.warn(e.percent)
      this.setState({progress:e})

    })
    .then(response => {
      if (response.status !== 201) {
        console.warn("nothing to upload")
        throw new Error("Failed to upload image to S3");
      }
      else {
        console.warn("data upload done!")
        console.warn(response)
        // debugger
        this.setState({
          isLoaded:false,
          downloaded:response.body.postResponse.location
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.upload_parent}>
        <Text style={{ fontSize: 20, marginBottom: 20, }}>Upload File on Cloud</Text>

        <TouchableOpacity
          style={styles.upload_img}
          onPress={() => {
            myPicker.getOnePick(response => {
              this.setState({
                source: response
              })
            })
          }}>
          <Image
            style={styles.upload_img}
            source={{ uri: this.state.source }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.upload_bttn}
          onPress={this.Upload_file}
        >
          <Text style={{ fontSize: 20 }}>Upload</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginBottom: 20, }}>Image downloaded from the Cloud: </Text>
        {this.state.isLoaded ? <View><ActivityIndicator  
        style={{ marginTop:40,
        borderRadius:10}}
        /><Text>{this.state.progress}</Text>
        </View>
        : <Image 
        style={styles.upload_img} 
        source={{ uri: this.state.downloaded }} 
        /> }
       
      </View>
    );
  }
}
export default Uploads;

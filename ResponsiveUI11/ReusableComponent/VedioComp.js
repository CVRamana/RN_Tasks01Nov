import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

class VedioComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <View style={styles.parent}>
    <Video source={{uri:this.props.name }}
       ref={(ref) => {
         this.player = ref
       }} 
       selectedVideoTrack={{
        type: "resolution",
        value: 240
      }}  
      playInBackground={false}
      poster = 'https://cdn3.vectorstock.com/i/1000x1000/22/22/abstract-logo-video-loading-vector-4692222.jpg'
   
     posterResizeMode={"center"}
       paused={true}
       controls={true} 
       //fullscreenAutorotate=landscape 
       volume={1.0}                                 // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> 
       <Text>Vedio 1</Text>
      </View>
    );
  }
}

export default VedioComp;
var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
     backgroundColor:"pink",
      height:300,
     // width:300,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    parent:{
        height:300,
        margin:5,
        zIndex:19,
        //alignItems:'center',
        //justifyContent:"center"

       // borderRadius:90
    }
})

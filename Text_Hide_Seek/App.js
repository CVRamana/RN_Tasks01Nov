import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native'; 

class TextExp extends Component {
  render() {
    return (
      <View > 
        <Text
        numberOfLines={this.props.lines}>any of those examples doesn't work properly 
          when you try to create animated 
          spinner. Like I already mentioned in my answer on android trying to switch
          img for anim gif, will cause 5s delay when no png nor gif is shown.
          I believe the delay is caused by loading gif into memory, which might take some time. 
          However iOS seems to do much better job here. If you don't believe me, 
          try it yourself
        </Text> 
      </View>
    );
  }
}

class Text_Hide_Seek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: 0,
      isHidden:true
    };
  }
  Handle=()=> {
    this.setState({
      isHidden: !(this.state.isHidden),
     lines: this.state.isHidden ? 2 : 6
    })
    console.warn(this.state.lines)
  }
  render() {
    return (
      <View style={styles.parent}>
          {this.state.isHidden ? <TextExp lines={2} /> : <TextExp lines={7}/>}
   <Button
    style={{paddingLeft:20,backgroundColor:"red"}}
    title= {this.state.isHidden ? "SHOW" : "HIDE"} onPress={this.Handle}
    />
    </View>
    );
  }
}
export default Text_Hide_Seek;
const styles = StyleSheet.create({
  parent: {
    paddingTop: 50,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"orange",
   // alignItems: "center",
    flex: 1,
  },
  txt: {
    fontSize: 20
  },
  btn: {
    backgroundColor:"green",
    height:50,
    width:100,
    paddingLeft:100
  }
})

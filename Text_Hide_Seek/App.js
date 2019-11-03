import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';

class Text_Hide_Seek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: 2,
      expand: true
    };
  }
  handleClick = () => {
    this.setState({
     lines:7
    })
  }
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.txt}
          numberOfLines={this.state.lines}
        >
          Text supports nesting, styling, and touch handling.
          In the following example, the nested title
          and body text will inherit the fontFamily from styles.baseText,
          but the title provides its own additional styles.
          The title and body will stack on top of each other on account of the literal newlines:
 </Text>
        <Button title="Read more"
          style={styles.btn}
          onPress={this.handleClick}
        />
        {/* <TouchableOpacity 
        style={styles.btn}
        onPress={this.handleClick}>

      if ({this.state.expand} ){
       <Text>"Read more.." </Text>
       } else{<Text>"Read Less"</Text>
      }
          </TouchableOpacity> */}
      </View>
    );
  }
}

export default Text_Hide_Seek;
const styles = StyleSheet.create({
  parent: {
    paddingTop: 50,
    alignItems: "center",
    flex: 1,
  },
  txt: {
    fontSize: 20
  },
  btn: {
    backgroundColor: "green"
  }
})

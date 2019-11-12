import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet,TouchableOpacity } from 'react-native';
//import styles from '../Constants/styles';
import CheckBox from 'react-native-check-box'

class Flat_api_comp extends Component {
  constructor(props) {
    super(props);
this.state={
  isChecked:true
}
  }

  render() {
    return (
      <View style={styles.fp}>
        <View >
          <Image
            style={styles.fimg}
            source={{ uri: this.props.url11 }}
          />
        </View>
        <View style={{width:180,justifyContent:"center",alignItems:"center"}} >
            <Text>{this.props.email11}</Text>
        </View>
        <View style={{justifyContent:"center",
        backgroundColor:"pink",
        //marginRight:10,
        alignItems:"center"}}>
         <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={(index) => {
                      this.setState({
                        isChecked: !this.state.isChecked
                      })
                    }}
                 //   if(id ==={item.idex})
                    isChecked={this.state.isChecked}
                    checkedImage={<Image source={require('../Assets/check.png')} />}
                    unCheckedImage={<Image source={require('../Assets/uncheck.png')} />}
                  />
            <Button
            title="delete"
            onPress={this.props.call}
            />
          </View>
      </View>
    );
  }
}

export default Flat_api_comp;
const styles = StyleSheet.create({
  fp: {
    flexDirection: "row",
    backgroundColor: "#9dcdf5",
    flex: 1,
    marginBottom:5,
  },
  fimg: {
    width: 80,
    height: 80,
    backgroundColor: "lightgrey"
  },
  f_img: {

  },
})

import React, { Component } from 'react';
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

//import { TouchableOpacity } from 'react-native-gesture-handler';

class Flat_comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.fv}>
          <View style={{flexDirection:"row",flex:1}}>
            <Text style={{fontSize:20}}>{this.props.id+1}: </Text>
            <Text style={{fontSize:20}}>{this.props.x}</Text>
            </View>
<View style={{flexDirection:"row",
//backgroundColor:"pink",
justifyContent:"center",

alignItems:"center",
flex:1,
}}>
        <TouchableOpacity
        onPress={this.props.call}>
          <Text style={{color:"red"}}>DELETE</Text>
          </TouchableOpacity>
          </View>

        </View>
    );
  }
}

export default Flat_comp;
const styles=StyleSheet.create({
    fv:{
        //justifyContent: 'center',
        flexDirection:"row",
        width:350,
        height:50,
        borderRadius:25,
        paddingLeft: 13,
        alignItems: 'center',
        margin: 6,
        backgroundColor:"orange",
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
      
      },
})

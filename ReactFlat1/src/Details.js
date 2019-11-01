import React,{Component} from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';

class Details extends React.Component {
    render() {
      return (
        <View style={styles.baap}>
          <Button title="Go to Mega Details "
          onPress={()=>{this.props.navigation.navigate('Image_Multiple')}}
          ></Button>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }
  export default Details
  const styles=StyleSheet.create({
    baap:{ flex: 1,
      alignItems: 'center',
       justifyContent: 'center' }
  })
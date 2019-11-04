import React,{Component} from 'react';
import { View, Text,Button,StyleSheet,props } from 'react-native';

class Details extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

    render() {
      const { params } = this.props.navigation.state;
      const username = params ? params.username : null;
      const password = params ? params.password : null;
      console.warn(username)
      console.warn(password)
      return (
        <View style={styles.baap}>
         <Text>Data from the Login Screen </Text>
         <Text>{username} </Text>
         <Text> {password}</Text>
          <Button title="Go to Mega Details "
          onPress={()=>{this.props.navigation.navigate('Image_Multiple',)}}
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
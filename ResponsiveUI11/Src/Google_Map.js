import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
//import MyCustomMarkerView from '../ReusableComponent/MyCustomMarkerView'
class Google_Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
        latlng: {
          latitude: 28.7041, longitude: 77.1025
        },
        title: 'India',
        description: "jhfdghjkds"
      },
      {
        latlng: {
          latitude: 20.5937, longitude: 78.9629
        },
        title: 'Delhi',
        description: "this Poluted"
      }
    ],
      x: {
        //delhi
        latitude: 28.7041, longitude: 77.1025
      }
    }
  }

  getInitialState() {
    return {
      region: {
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }


  render() {
    return (
      <View style={styles.parent}>
        <Text> Google_Map </Text>
        <MapView
          provider = {PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}  >
            {this.state.markers.map(marker => (
    <Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
      image={require('../Assets/plus.png')}

    />
  ))}
            </MapView>
      </View>
    );
  }
}

export default Google_Map;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  parent: {
    flex: 1,
    //justifyContent:"center",
    // alignItems: 'center',
  },

});
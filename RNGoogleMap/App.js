import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
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
      }],
      x: {
        //delhi
        latitude: 28.7041, longitude: 77.1025
      }
    };
  }
  getInitialState() {
    return {
      region: {
        latitude: 28.7041,
        longitude: 78.9629,
        //        longitude: ,
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
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        ></MapView>
        <Marker
          draggable
          coordinate={this.state.x}
          onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        >
        </Marker>
        {/* </MapView> */}
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    //width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
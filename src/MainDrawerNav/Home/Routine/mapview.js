import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class MapViewScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMapReady: false,
      latitude: 0,
      longitude: 0,
      error: null,
    }

  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ 
        error: error.message, latitude: 9.0515, longitude: 7.4968  }),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  onRegionChange(region) {
    this.setState({ region: region });
  }
  render() {
    //const latlong = [{ latitude:this.state.latitude, longitude: this.state.longitude}];
    //const latlong = [{ latitude: 9.0515, longitude: 7.4968 }];
    //const region = this.getRegionForCoordinates(latlong);
    /*
    const region = {
      latitude: 9.0529013354964, 
      longitude: 7.496436908841132, 
      latitudeDelta: 0.0043, 
      longitudeDelta: 0.0034
    }*/
    const region = { 
      latitude: this.state.latitude, 
      longitude: this.state.longitude, 
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034 
    };
    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          mapType='standard'
          showsScale
          showsCompass
          showsPointsOfInterest
          showsBuildings
          showsUserLocation={true}
          region={region}
          onLayout={this.onMapLayout}
          onPress={e => console.log(e.nativeEvent)}
        >
          {this.state.isMapReady &&
            <MapView.Marker
              title={this.props.title}
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude
              }} />
          }
        </MapView>
        <View>
          <Text> {this.state.latitude} </Text>
          <Text> {this.state.longitude} </Text>
          <Text> {this.state.error} </Text>
        </View>
      </View>
    )
  }

  getRegionForCoordinates = (points) => {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;

    // init first point
    ((point) => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.map((point) => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX);
    const deltaY = (maxY - minY);

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default MapViewScreen;
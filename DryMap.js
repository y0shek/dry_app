/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';

export default class DryMap extends Component{
  static navigationOptions = {
    title: 'Dry Map',
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 39.749632,
          longitude: -105.000363,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0201
        }}
        />
      </View>
    );
  }
}

class Search extends Component{
  render(){
  }
}

class Filters extends Component{
  render(){
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

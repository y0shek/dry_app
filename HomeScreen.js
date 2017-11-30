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

export default class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.menuBar}>
          <View style={styles.menuButton}>
          <TouchableHighlight underlayColor={ 'transparent' } onPress={() => navigate('Settings')}>
            <Image source={require('./rsc/img/settings-icon.png')} style={styles.icon} />
          </TouchableHighlight>
          </View>
          <View style={styles.menuButton}>
          <TouchableHighlight underlayColor={ 'transparent' } onPress={() => navigate('Profile')}>
            <Image source={require('./rsc/img/profile-icon.png')} style={styles.icon} />
          </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.welcome}>Welcome to Dry Map!</Text>
        <Button
          onPress={() =>
            navigate('DryMap')
          }
          title="Find resources nearby"
          color="#0066cc"
          accessibilityLabel="Learn more about this button"
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menuBar: {
    width:'100%',
    height:70,
    position: 'absolute',
    top: 0,
    padding:10,
    flexDirection:'row-reverse',
  },
  menuButton: {
    width:50,
    height:50,
    marginLeft:10
  },
  icon: {
    width:'100%',
    height:'100%'
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

import HomeScreen from './HomeScreen'; // Home Screen
import DryMap from './DryMap'; // Map Screen
import Settings from './Settings'; //Settings Screen
import Profile from './Profile'; //Profile Screen


const Navigator = StackNavigator({
  Home: { screen: HomeScreen } ,
  DryMap: { screen: DryMap } ,
  Settings: { screen: Settings } ,
  Profile: { screen: Profile }
});

export default Navigator;

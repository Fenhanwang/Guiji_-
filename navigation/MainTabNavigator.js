import React from 'react';
import { Platform } from 'react-native';
import {
  createDrawerNavigator, 
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createDrawerNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  drawerLabel: 'Home',
  // drawerIcon: ({ focused }) => (
  //   <DrawerIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

const LinksStack = createDrawerNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  drawerLabel: 'Links',
  // drawerIcon: ({ focused }) => (
  //   <DrawerIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
  //   />
  // ),
};

const SettingsStack = createDrawerNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  drawerLabel: 'Settings',
  // drawerIcon: ({ focused }) => (
  //   <DrawerIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  //   />
  // ),
};

export default createDrawerNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Browse from './src/screens/Browse';
import Profile from './src/screens/Profile';
import BookIcon from './src/assets/icons/book';
import HomeIcon from './src/assets/icons/home';
import ProfileIcon from './src/assets/icons/profile';
import { StatusBar } from 'expo-status-bar';
import Welcome from './src/screens/Welcome';
import {IconTabs} from './src/navigation/CustomTabBar';
import RootNavigator from './src/navigation/RootNavigator';



export default function App() {
  return (
    <RootNavigator/>
  );
}
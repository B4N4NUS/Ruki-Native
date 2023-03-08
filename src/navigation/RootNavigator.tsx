import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Browse from '../screens/Browse';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import TabNavigator from './TabNavigator';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main' component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

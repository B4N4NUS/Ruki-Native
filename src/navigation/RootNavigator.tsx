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
import RegisterEmail from '../screens/RegisterEmail';
import Settings from '../screens/Settings';
import OnBoarding from '../screens/OnBoarding';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="RegisterEmail" component={RegisterEmail}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='OnBoarding' component={OnBoarding}/>
        <Stack.Screen name='Main' component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

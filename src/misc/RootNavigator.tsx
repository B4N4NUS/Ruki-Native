import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTabBar';
import Browse from '../screens/Browse';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

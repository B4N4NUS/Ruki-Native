import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Browse from '../screens/Browse';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Login from '../screens/LoginRegister/Login';
import Settings from '../screens/Settings';
import OnBoarding from '../screens/LoginRegister/OnBoarding';
import Register from '../screens/LoginRegister/Register';
import RegisterEmail from '../screens/LoginRegister/RegisterEmail';
import Welcome from '../screens/LoginRegister/Welcome';
import PushAdd from '../screens/Settings/PushAdd';
import RedactProfile from '../screens/Settings/RedactProfile';
import ChangePassword from '../screens/Settings/ChangePassword';
import Dictionary from '../screens/ThemesNTasks/Dictionary';
import Theme from '../screens/ThemesNTasks/Theme';
import Task from '../screens/ThemesNTasks/Task';
import Congrads from '../screens/ThemesNTasks/Congrads';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, cardStyle: { backgroundColor: '#fff' }}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="RegisterEmail" component={RegisterEmail}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name="Settings-RedactProfile" component={RedactProfile}/>
        <Stack.Screen name="Settings-Push" component={PushAdd}/>
        <Stack.Screen name="Settings-ChangePassword" component={ChangePassword}/>
        <Stack.Screen name='OnBoarding' component={OnBoarding}/>
        <Stack.Screen name='Main' component={TabNavigator}/>
        <Stack.Screen name="Dictionary" component={Dictionary}/>
        <Stack.Screen name="Theme" component={Theme}/>
        <Stack.Screen name="Task" component={Task}/>
        <Stack.Screen name="Congrads" component={Congrads}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Browse from "../screens/Browse";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { IconTabs } from "./CustomTabBar";
import Lession from '../screens/Lession';

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();
    
    return (
        < Tab.Navigator screenOptions={{ headerShown: false,tabBarStyle:{margin:0, padding:0} }} sceneContainerStyle={{backgroundColor:"white"}}  tabBar={(props) => <IconTabs {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Browse" component={Browse} />
            <Tab.Screen name="Profile" component={Profile} />
            {/* <Tab.Screen name="Lession" component={Lession} /> */}
        </Tab.Navigator >
    )
}
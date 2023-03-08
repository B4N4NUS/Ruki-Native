import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Browse from "../screens/Browse";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Welcome from "../screens/Welcome";
import { IconTabs } from "./CustomTabBar";

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        < Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <IconTabs {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Browse" component={Browse} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator >
    )
}
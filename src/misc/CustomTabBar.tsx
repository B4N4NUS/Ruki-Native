import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import ProfileIcon from '../icons/profile';

export default function CustomTab({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          alert("tabbed")

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key ={index}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
              {/* <ProfileIcon /> */}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
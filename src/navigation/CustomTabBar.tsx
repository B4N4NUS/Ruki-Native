import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import BookIcon from '../assets/icons/book';
import HomeIcon from '../assets/icons/home';
import ProfileIcon from '../assets/icons/profile';

export function IconTabs({ state, descriptors, navigation }) {
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
          key={label[0]+1}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", opacity: (isFocused? 1: 0.3), margin:10}}
          >
            {label === "Home" && <HomeIcon />}
            {label === "Browse" && <BookIcon />}
            {label === "Profile" && <ProfileIcon />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
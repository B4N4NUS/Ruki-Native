import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SettingsIcon from '../../assets/icons/settings';
import AchievementList from '../../components/AchievementList';
import DictionaryList from '../../components/Lession/DictionaryList';
import ProfileCard from '../../components/ProfileCard';
import IProfile from '../../interfaces/IProfile';
import { getProfile, getThemeProgress } from '../../misc/Firebase';
import styles from '../../misc/Styles';

export default function Dictionary({ route, navigation }) {
  const [theme, setTheme] = React.useState(null)
  const { options } = route.params

  React.useEffect(() => {
    console.log("Want to find: " + options.theme.dictionaryId)
    setTheme(options.theme)
  }, [])

  return (
    <SafeAreaView style={[styles.screenContainer, {}]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{
          fontWeight: "bold",
          textAlign: "left",
          fontSize: 18,
          alignItems: "center",
          justifyContent: "center"
        }}>
          {theme?.name}
        </Text>

        <Text style={{
          fontWeight: "bold",
          textAlign: "left",
          fontSize: 24,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-start",
          marginVertical: 20,
          marginHorizontal: 20,
        }}>
          Узнайте основные фразы
        </Text>
      </View>
      <DictionaryList theme={theme} />

      <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 40 }]}
        onPress={() => {
          navigation.navigate("Theme", {options: options})
        }}>
        <Text style={styles.textButtonText}>
          Перейти к практике
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

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

  const isFocused = useIsFocused();

  React.useEffect(() => {
    console.log("Want to find: " + options.theme.dictionaryId)
    setTheme(options.theme)
  }, [])

  // useFocusEffect(() => {
  //   update()
  // }) 



  //   const update = () => {
  //     getProfile().then((response) => {
  //       setUser(response)
  //       // console.log("got user profile: ")
  //       // console.log(response)
  //     })
  //     // clearThemeProgress()
  //     getThemeProgress().then((response) => {
  //       // storeThemeProgress(2,3,6)
  //       setProgress(response.data)
  //       console.log("got user profile: ")
  //       console.log(response.data)
  //     })
  //   }

  return (
    <SafeAreaView style={[styles.screenContainer, {}]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.headerText}>
          {theme?.name}
        </Text>

        <Text>
          Узнайте основные фразы
        </Text>
      </View>
      <DictionaryList theme={theme} />

    </SafeAreaView>
  );
};

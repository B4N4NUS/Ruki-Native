import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SettingsIcon from '../../assets/icons/settings';
import AchievementList from '../../components/AchievementList';
import ProfileCard from '../../components/ProfileCard';
import IProfile from '../../interfaces/IProfile';
import { getProfile, getThemeProgress } from '../../misc/Firebase';
import styles from '../../misc/Styles';

export default function Profile({ route, navigation }) {
  const [user, setUser] = React.useState<IProfile | null>(null)
  const [progress, setProgress] = React.useState()

  const isFocused = useIsFocused();

  React.useEffect(() => {
    update()
  }, [isFocused]) 

  // useFocusEffect(() => {
  //   update()
  // }) 

  

  const update = () => {
    getProfile().then((response) => {
      setUser(response)
      // console.log("got user profile: ")
      // console.log(response)
    })
    // clearThemeProgress()
    getThemeProgress().then((response) => {
      // storeThemeProgress(2,3,6)
      setProgress(response.data)
      console.log("got user profile: ")
      console.log(response.data)
    })
  }

  return (
    <SafeAreaView style={[styles.screenContainer, {}]}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Профиль
        </Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => {
          
          navigation.navigate("Settings")
        }}>
          <SettingsIcon width={30} height={30} style={{ flex: 0 }} />
        </TouchableOpacity>

      </View>
      {/* <ProfileCard style={styles.profileCard}/>
      <AchievementList style={styles.list}/> */}
      <ProfileCard profile={user}/>
      {/* <LessonList/> */}
      <AchievementList data={progress}/>
    </SafeAreaView>
  );
};

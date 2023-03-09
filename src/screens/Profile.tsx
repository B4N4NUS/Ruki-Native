import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SettingsIcon from '../assets/icons/settings';
import Achievement from '../components/Achievement';
import AchievementList from '../components/AchievementList';
import ProfileCard from '../components/ProfileCard';
import IProfile from '../interfaces/IProfile';
import { auth, getProfile } from '../misc/Firebase';
import styles from '../misc/Styles';

export default function Profile({ route, navigation }) {
  const [user, setUser] = React.useState<IProfile | null>(null)

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
      console.log("got user profile: ")
      console.log(response)
    })
  }

  return (
    <View style={styles.screenContainer}>
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
      <AchievementList />
    </View>
  );
};

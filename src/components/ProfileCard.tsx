import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Achievement from '../components/Achievement';
import AchievementList from '../components/AchievementList';
import IProfile from '../interfaces/IProfile';

export default function ProfileCard({ profile }: { profile: IProfile }) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={profile?.imageUri ? { uri: profile.imageUri } : require("../assets/images/profile_icon.png")} />
      <View style={styles.userinfo}>
        <Text style={styles.name}>{profile ? profile.name : ""}</Text>
        <Text style={styles.username}>{profile ? profile.username : ""}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    minHeight: 140,
  },
  userinfo: {
    flexDirection: 'column',
    paddingLeft: 20,
    // justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    color: 'black',
  },
  name: {
    // font: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  username: {
    // font: 'sans-serif',
    fontSize: 15,
    color: 'black',
  },
  avatar: {
    borderRadius: 70,
    width:120,
    height:120,
    borderWidth: 1,
    borderColor: "black"
  }
});

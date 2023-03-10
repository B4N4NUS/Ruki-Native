import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Achievement from '../components/Achievement';
import AchievementList from '../components/AchievementList';
import IProfile from '../interfaces/IProfile';
import styles from '../misc/Styles';

export default function ProfileCard({ profile }: { profile: IProfile }) {
  return (
    <View style={styless.container}>
      <Image style={styless.avatar} source={profile?.imageUri ? { uri: profile.imageUri } : {uri: "https://sun1-14.userapi.com/impg/jhJ5bKuIELN9NPIQIAvSxWUqQEyht9GFuXaUNA/ufsy0JoAQUk.jpg?size=400x400&quality=96&sign=45c3f28bc82aa689d2fbb493ab0e9d6c&type=album"}} />
      <View style={styless.userinfo}>
        <Text style={styless.name}>{profile ? profile.name : ""}</Text>
        <Text style={styless.username}>{profile ? profile.username : ""}</Text>
        <Text style={styles.littleText}>{profile ? profile.email : ""}</Text>
        <Text style={styles.littleText}>{profile ? profile.phone : ""}</Text>
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
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

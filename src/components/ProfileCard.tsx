import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Achievement from '../components/Achievement';
import AchievementList from '../components/AchievementList';

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* <Image style={styles.avatar} source={require('../images/profile_icon.png')}/> */}
        <View style={styles.userinfo}>
        <Text style={styles.name}>Имя Фамилия</Text>
        <Text style={styles.username}>Юзернейм</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userinfo:{
    flexDirection: 'column',
    paddingLeft: 20,
    // justifyContent: 'center',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
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
    borderRadius:70
  }
});

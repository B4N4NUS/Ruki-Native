import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Achievement from '../components/Achievement';
import AchievementList from '../components/AchievementList';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* <ProfileCard style={styles.profileCard}/>
      <AchievementList style={styles.list}/> */}
      <ProfileCard />
      <AchievementList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    flexDirection:'column',
    // justifyContent:'space-between',
    alignContent: 'flex-start'
  },
  // list: {
  //   marginTop:-1000,
  //   marginBottom: -1000
  // },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  name: {
    fontSize: 20,
    color: '#fff',
  }, 
  username: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Profile;
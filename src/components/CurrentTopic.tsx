import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Achievement from './Achievement';
import AchievementList from './AchievementList';

const CurrentTopic = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Текущая тема</Text>
      <Text style={styles.title}>Путешествия</Text>
      <View style={styles.fixedRatio}>
            <Text style={{}}>Урок 5/12</Text>
            <Text>Продолжить обучение</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 5
  },
  fixedRatio: {
    backgroundColor: '#f0f2f0',
    flex: 1,
    aspectRatio: 36 / 10,
    borderRadius: 20,
      padding: 10,
      justifyContent: 'space-around',
      paddingLeft:10,
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

export default CurrentTopic;
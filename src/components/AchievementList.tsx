import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Achievement from './Achievement';

var DATA = [
    {
      header: "Уроков пройдено",
      details: "12"
    },
    {
        header: "Уроков пройдено",
        details: "12"
    },
    {
        header: "Уроков пройдено",
        details: "12"
    },
    {
        header: "Уроков пройдено",
        details: "12"
    },

  ];


const AchievementList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Статистика и достижения</Text>
      {/* <FlatList style={styles.list}
        data={DATA}
        numColumns={2}
        renderItem={({item}) => <Achievement header={item.header} details={item.details} key={item.details[0]}/>}
        // keyExtractor={item => item.id}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // marginTop: StatusBar.currentHeight || 0,
    // padding: 10
  },
  header:{
    fontSize: 20,
    padding:10,
    // font: 'sans-serif',
    fontWeight:'bold'
  },
  list:{
    paddingTop:10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default AchievementList;
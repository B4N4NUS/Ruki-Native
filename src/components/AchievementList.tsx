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



const AchievementList = ({data}) => {
  return (
    <SafeAreaView style={{}}>
      {<Text style={styles.header}>Статистика</Text>}
      <FlatList style={styles.list}
        data={data}
        numColumns={2}
        renderItem={({item}) => <Achievement id={item.id}  progress={item.progress} length={item.length}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize: 20,
    padding:10,
    // font: 'sans-serif',
    fontWeight:'bold',
    marginHorizontal:15,
  },
  list:{
    paddingTop:10,
    marginHorizontal:10,
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
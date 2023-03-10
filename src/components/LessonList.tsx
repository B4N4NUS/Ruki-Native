import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import ListComponent from './ListComponent';

var DATA = [
    {
      header: "Уроков пройдено",
      details: "11"
    },
    {
        header: "Уроков пройдено",
        details: "12"
    },
    {
        header: "Уроков пройдено",
        details: "13"
    },
    {
        header: "Уроков пройдено",
        details: "14"
    },

  ];


const LessonList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Следующие уроки</Text>
      <FlatList style={styles.list}
        data={DATA}
        numColumns={2}
        renderItem={({item}) => <ListComponent header={item.header} details={item.details}/>}
        keyExtractor={item => item.header+item.details}
      />
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
    backgroundColor: '#f0f2f0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default LessonList;
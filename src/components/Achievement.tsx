import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getThemesById } from '../misc/TasksAndLessions';

const Achievement = ({ id, progress, length }) => {
  const [name, setName] = React.useState("")
  
  React.useEffect(() => {
    getThemesById(id).then((resp) => {
      setName(resp.name)
    })
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.header}>{name}</Text>
        <View style={{flexDirection:"row",}}>
        <Text style={styles.progress}>{progress}</Text>
          <Text style={styles.details}>{"/"+length}</Text>
        </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 5,
    backgroundColor: '#f0f2f0',
    width: Dimensions.get("window").width / 2 - 30,
    aspectRatio: 16 / 9,
    borderRadius: 20,
    margin:10,
    // padding: 10,
    // paddingLeft: 10,
  },
  header: {
    // font: 'sans-serif',
    fontSize: 16,
    // fontWeight: 'bold'
  },
  progress: {
    // font: 'sans-serif',
    fontSize: 34,
    fontWeight: 'bold'
  },
  details: {
    // font: 'sans-serif',
    fontSize: 16,

  }
});

export default Achievement;
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import GlobalIcon from "../assets/pics/global";
import styles from '../misc/Styles';

const CurrentTopic = () => {
  return (
    <View style={styless.container}>
      <Text style={styless.title}>Текущая тема</Text>
      <Text style={styless.name}>Путешествия</Text>
      <View style={styless.fixedRatio}>
        <Text style={styless.counter}>Урок 5</Text>
        <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
          <GlobalIcon height={"100%"} width={'100%'} alignSelf={"center"} />
        </View>

        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.textButtonText}>Продолжить обучение</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    // width: '100%',
    // padding: 10,
    // paddingTop: 20,
    alignItems: 'stretch'
  },
  fixedRatio: {
    backgroundColor: '#f0f2f0',
    flex: 1,
    position: 'relative',
    // aspectRatio: 7 / 5,
    width: "100%",
    borderRadius: 20,
    // padding: 20,
    justifyContent: 'space-around',
    marginTop: 10,
    marginHorizontal: 20,
    alignSelf: 'center'
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    color: 'gray',
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold'

  },
  counter: {
    fontSize: 16,
    position: "absolute",
    top:15,
    left:20,
    fontWeight: 'bold'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  }
});

export default CurrentTopic;
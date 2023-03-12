import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, FlatList, } from 'react-native';
import { GetLastVisitedTheme, getThemeProgress } from '../misc/Firebase';
import styles from '../misc/Styles';
import { getAllThemes, getThemesById } from '../misc/TasksAndLessions';
const { width } = Dimensions.get('screen');
import GlobalIcon from "../assets/pics/global";
import StartPic from '../assets/pics/start';
import LoginPic from '../assets/pics/login';
import WorkIcon from '../assets/pics/work';
import ListComponent from '../components/ListComponent';

export default function Home({ route, navigation }) {
  const tabBarheight = useBottomTabBarHeight();
  const isFocused = useIsFocused();
  const [theme, setTheme] = useState(null)
  const [nextThemes, setNextThemes] = useState(null)
  const [currentThemeProgress, setCurrentThemeProgress] = useState(0)

  useEffect(() => {
    GetLastVisitedTheme().then((response) => {
      console.log(response)
      if (response) {
        setTheme(response)
        getNextThemes(response)
      } else {
        getThemesById(0).then((resp) => {
          setTheme(resp)
          getNextThemes(resp)
        })
      }
    }).catch((e) => console.log(e.message))

    
  }, [isFocused]);


  const getNextThemes = (theme) => {
    getAllThemes().then((themes) => {
      getThemeProgress().then((progress) => {
        
        for(let i = 0; i < progress.data.length; i++) {
          if (progress.data[i].id === themes.id) {
            setCurrentThemeProgress(progress.data[i].progress)
          }
          if (progress.data[i].progress == progress.data[i].length) {
            themes.splice(themes.findIndex(item => item.id == progress.data[i].id), 1)
          }
        }
        themes.splice(themes.findIndex(item => item.id == theme.id), 1)
        setNextThemes(themes.splice(0,4))
      })
    })
  }

  return (
    <SafeAreaView style={[styles.screenContainer, { marginHorizontal: 20 }]}>

      <View style={styless.container}>
        <Text style={styless.title}>Текущая тема</Text>
        <Text style={styless.name}>{theme?.description}</Text>
        <View style={styless.fixedRatio}>
          <Text style={styless.counter}>{theme?.name}</Text>
          <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
            {/* <GlobalIcon height={"100%"} width={'100%'} alignSelf={"center"} /> */}
            {(theme?.id % 4 == 0 || !theme) && <StartPic height={"100%"} width={'100%'} alignSelf={"center"} />}
            {(theme?.id % 4 == 1) && <WorkIcon height={"100%"} width={'100%'} alignSelf={"center"} />}
            {(theme?.id % 4 == 2) && <LoginPic height={"100%"} width={'100%'} alignSelf={"center"} />}
            {(theme?.id % 4 == 3) && <GlobalIcon height={"100%"} width={'100%'} alignSelf={"center"} />}
          </View>

          <TouchableOpacity style={[styles.textButton,{marginHorizontal:10,marginBottom:10,}]} onPress={() => {
            navigation.navigate("Dictionary", { options: { theme: theme} })
          }}>
            <Text style={styles.textButtonText}>Продолжить обучение</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Text style={styless.header}>Следующие уроки</Text>
      <FlatList style={styless.list}
        showsVerticalScrollIndicator={false}
        data={nextThemes}
        numColumns={2}
        renderItem={({ item }) => <ListComponent header={item.name} details={item.description} />}
        keyExtractor={item => item.name + item.description}
      />
    </SafeAreaView>
  );
};



const styless = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    maxWidth:Dimensions.get("window").width - 40,
    minWidth:Dimensions.get("window").width - 40,
    aspectRatio:7/6,
    // width: '100%',
    // padding: 10,
    // paddingTop: 20,
    alignItems: 'stretch'
  },
  header:{
    fontSize: 20,
    padding:10,
    // font: 'sans-serif',
    fontWeight:'bold'
  },
  list:{
    flex: 0,
    paddingTop:10
  },
  item: {
    backgroundColor: '#f0f2f0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title2: {
    fontSize: 32,
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
    top: 15,
    left: 20,
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

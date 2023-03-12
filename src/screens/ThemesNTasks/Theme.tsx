import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SettingsIcon from '../../assets/icons/settings';
import AchievementList from '../../components/AchievementList';
import ProfileCard from '../../components/ProfileCard';
import IProfile from '../../interfaces/IProfile';
import { getProfile, getThemeProgress } from '../../misc/Firebase';
import styles from '../../misc/Styles';
import { getTaskById } from '../../misc/TasksAndLessions';

export default function Theme({ route, navigation }) {
  const [theme, setTheme] = React.useState(null)
  const [path, setPath] = React.useState(null)
  const [line, setLine] = React.useState(null)
  const [mHeight, setmHeight] = React.useState(300)
  const { options } = route.params
  const [tasks, setTasks] = React.useState(null)
  var math = require('random-seed').create("12");



  React.useEffect(() => {
    console.log("length: " + options.theme.subtaskIds.length)
    setTheme(options.theme)
    math = require('random-seed').create(options.theme.subtaskIds.length + 2);
    // console.log(math.random())
    let widthPart = Math.floor(Dimensions.get("window").width / 5)
    let ss = [{ top: 0, left: widthPart }]
    for (let i = 1; i < options.theme.subtaskIds.length; i++) {
      let rnd = 0
      if (ss[i - 1].left !== widthPart * 4) {
        if (ss[i - 1].left !== widthPart) {
          rnd = Math.floor(math.random() * 10) % 3
        }
        rnd = Math.floor(math.random() * 10) % 2
      } else {
        rnd = Math.floor(math.random() * 10) % 2 * 2
      }
      switch (rnd) {
        case 0: {
          ss.push({ top: (ss[i - 1].top + widthPart), left: ss[i - 1].left })
          break
        }
        case 1: {
          ss.push({ top: ss[i - 1].top, left: (ss[i - 1].left + widthPart) })
          break
        }
        case 2: {
          ss.push({ top: ss[i - 1].top, left: (ss[i - 1].left - widthPart) })
          break
        }
      }
      if (mHeight < ss[i].top) {
        setmHeight(ss[i].top)
      }
    }
    // console.log(ss)
    setPath(ss)
    let aa = []
    for (let i = 1; i < ss.length; i++) {
      if (ss[i - 1].top !== ss[i].top) {
        aa.push({ top: ss[i - 1].top, left: ss[i].left, height: widthPart, width: 0 })
      } else {
        if (ss[i - 1].left - ss[i].left > 0) {
          aa.push({ top: ss[i - 1].top + 25, left: ss[i].left, height: 0, width: widthPart })
        } else {
          aa.push({ top: ss[i - 1].top + 25, left: ss[i - 1].left, height: 0, width: widthPart })
        }
      }
    }
    setLine(aa)
    console.log(aa)
    // fetch(
    //   "http://ebreak.ru/Themes.json"
    // ).then((resp) => resp.json().then((r) => console.log(r.themes)))

    
    getAllTasks()
  }, [])


  const getAllTasks = async() => {
    let bb = []
    for(let i = 0; i < options.theme.subtaskIds.length; i++) {
      bb.push(await getTaskById(options.theme.subtaskIds[i]))
    }
    setTasks(bb)
  }

  return (
    <SafeAreaView style={[styles.screenContainer, {}]}>
      <View style={[styles.headerContainer, { flexDirection: "column" }]}>
        <Text style={styles.headerText}>
          {theme?.name}
        </Text>
        <Text style={{ fontSize: 14 }}>
          {theme?.description}
        </Text>
        <View style={{ flex: 1 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: "relative", height: mHeight }}>
          {line?.map((item, i) => <View style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            backgroundColor: "black",
            height: item.height === 0 ? 3 : item.height,
            width: item.width === 0 ? 3 : item.width,
          }}>
          </View>)}
          {path && theme?.subtaskIds.map((item, i) => <TouchableOpacity style={{
            position: "absolute",
            top: path[i].top,
            left: path[i].left - 25,
            borderRadius: 50,
            backgroundColor: "black",
            height: 50,
            aspectRatio: 1,
            justifyContent: 'center',
            zIndex: 10,
          }}onPress={() => {
            navigation.navigate("Task", {options: {tasks: tasks, theme: theme, start: i}})
          }}>
            <Text style={{ alignSelf: "center", color: "white", fontSize: 20 }}>
              {i + 1}
            </Text>
          </TouchableOpacity>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

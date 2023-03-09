import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CurrentTopic from '../components/CurrentTopic';
import LessonList from '../components/LessonList';
import styles from '../misc/Styles';

import {data} from './data';

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 5,
//     flexDirection:'column',
//     alignContent: 'flex-start',
//     justifyContent:'space-between'
//   },
//   list: {
//     marginTop: 20

//   }
  
//   });
const Home = () => {
    const tabBarheight = useBottomTabBarHeight();
    return (
      <SafeAreaView style={[styles.screenContainer,{marginHorizontal:20}]}>
          <CurrentTopic/>
          <LessonList/>
      </SafeAreaView>
    );
  };
  
  export default Home;

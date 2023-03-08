import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import CurrentTopic from '../components/CurrentTopic';
import { getPopUpSign } from '../misc/Firebase';

import {data} from './data';

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContentContainer: {
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 14,
    },
    imageCard: {
      borderRadius: 14,
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
    },
  });
const Home = () => {
    const tabBarheight = useBottomTabBarHeight();
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
      
        </View>
        <Button title = "sign" onPress={() =>getPopUpSign()}></Button>
  
        {/* Scrollable Content */}
        <View style={styles.scrollContainer}>
          <ScrollView
            indicatorStyle="white"
            contentContainerStyle={[
              styles.scrollContentContainer,
              {paddingBottom: tabBarheight},
            ]}>
            <CurrentTopic/>
          
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default Home;

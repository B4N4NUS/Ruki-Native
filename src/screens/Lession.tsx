// Home.js
import React, { useState, useEffect } from "react";
import {StyleSheet,Text,SafeAreaView,ActivityIndicator,View, Platform, StatusBar,} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
var DATA = [
  {
    answer: "Спасибо",
    image: "",
    variants: ["Спасибо", "Пожалуйста", "Досвидания", "Здравствуйте"]
  },
  {
    answer: "Пожалуйста",
    image: "",
    variants: ["Спасибо", "Пожалуйста", "Досвидания", "Здравствуйте"]
  },


];

const Lession = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Выберете верное слово</Text>
        <View style={styles.fixedRatio}>
          {/* Здесь должна быть картинка */}
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.option}>{/*Здесь вариант ответа */}

            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>{/*Здесь вариант ответа */}
            </TouchableOpacity>
          </View>
          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.option}>{/*Здесь вариант ответа */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>{/*Здесь вариант ответа */}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Далее</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

export default Lession;

const styles = StyleSheet.create({

  screenContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",

  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  optionsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    padding: 5
  },
  option: {
    alignItems: 'center',
    justifyContent: "space-between",
    width: "50%",
    height: "50%",
    backgroundColor: "#f0f2f0",
    marginVertical: 2,
    marginHorizontal: 2,
    aspectRatio: 5 / 2,
    borderRadius: 20,
    marginLeft: 2,
    marginRight: 2,
    alignSelf: 'center'
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,

  },
  contentContainer: {
    flex: 2,
    padding: 20,
  },
  fixedRatio: {
    backgroundColor: '#f0f2f0',
    aspectRatio: 7 / 5,
    borderRadius: 20,
    height: "40%",
    // justifyContent: 'space-between',
    marginTop: 10,
    alignSelf: 'center'
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


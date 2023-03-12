// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import styles from "../misc/Styles";
import { getAllThemes } from "../misc/TasksAndLessions";

export default function Browse({ route, navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    getAllThemes().then((response) => {
      setFakeData(response)
      console.log(response)
    })
  }, []);

  return (
    <SafeAreaView style={[styles.screenContainer]}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {(

        <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked} 
          navigation={navigation}/>

      )}
    </SafeAreaView>
  );
};


// Home.js
import { useIsFocused } from "@react-navigation/native";
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
  const [data, setData] = useState();

  const isFocused = useIsFocused();

  useEffect(() => {
    getAllThemes().then((response) => {
      setData(response)
      console.log(response)
    })
  }, [isFocused]);

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
          data={data}
          setClicked={setClicked} 
          navigation={navigation}/>

      )}
    </SafeAreaView>
  );
};


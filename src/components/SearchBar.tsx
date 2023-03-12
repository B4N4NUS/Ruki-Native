// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View style={{
      margin: 20,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      padding: 10,
      backgroundColor: '#f0f2f0',
      borderRadius: 15,
      position: "relative",
    }}>
      <Feather
        name="search"
        size={20}
        color="black"
        style={{
          position: "absolute",
          alignSelf: "center",
          left: 10,
        }}
      />
      <TextInput
        style={{
          fontSize: 16,
          width: "100%",
          paddingHorizontal: 24,
        }}
        placeholder="Поиск"
        value={searchPhrase}
        onChangeText={(text) => {
          setSearchPhrase(text)
          setClicked(true)
        }}
      />
      {clicked && (
        <Entypo name="cross" size={20} color="black" style={{
          position: "absolute",
          alignSelf: "center",
          right: 10,
        }}
          onPress={() => {
            setSearchPhrase("")
            setClicked(false)
          }} />
      )}

    </View>
  );
};
export default SearchBar;
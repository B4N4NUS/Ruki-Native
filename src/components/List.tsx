// List.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import ConfirmIcon from "../assets/icons/confirm";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ theme, done, navigation }) => (
  <TouchableOpacity style={{
    marginVertical:10,
    marginHorizontal:20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f2f0',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal:20
  }}
  onPress={() => {
    // const navigation = useNavigation()
    navigation.navigate("Dictionary", {options:{theme:theme}})
  }} 
  >
    <View style={{

      flex: 1,
      aspectRatio: 3 / 1,

      // padding: 10,
      justifyContent: 'space-around',
      // paddingLeft:10,
    }}>
      <Text style={styles.header}>{theme.name}</Text>
      <Text style={styles.details}>{theme.description}</Text>
    </View>
    <View>
      <View style={{
        position: "relative",
        height: "40%",
        aspectRatio: 1,
        borderColor: "black",
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: done ? "black" : "transparent",
        justifyContent:"center",
        marginRight: 10,
      }}>
        {done && <ConfirmIcon height={"50%"} width={"50%"} alignSelf={"center"}/>}
      </View>
    </View>
  </TouchableOpacity >
);

const List = ({ searchPhrase, setClicked, data, navigation }) => {
  const renderItem = ({ item }) => {
    // console.log(item)
    if (searchPhrase === "") {
      return <Item theme={item} done={true} navigation={navigation}/>;
    }
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item theme={item} done={true} navigation={navigation}/>;
    }
    if (item.description.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item theme={item} done={true} navigation={navigation}/>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    // margin: 10,
    height: "85%",
    width: "100%",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  details: {
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});
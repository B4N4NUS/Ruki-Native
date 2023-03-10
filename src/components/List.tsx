// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import ConfirmIcon from "../assets/icons/confirm";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, done }) => (
  <View style={{
    marginVertical:10,
    marginHorizontal:20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f2f0',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal:20
  }} >
    <View style={{

      flex: 1,
      aspectRatio: 3 / 1,

      // padding: 10,
      justifyContent: 'space-around',
      // paddingLeft:10,
    }}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.details}>{details}</Text>
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
  </View >
);

const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} done={true} />;
    }
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} done={true} />;
    }
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} done={true} />;
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
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import styles from '../../../misc/Styles';
import Hands from '../Hands';

export default function WordTask({ task, giveNext }) {
    const toast = useToast()
    const [selected, setSelected] = useState(null)
    const [status, setStatus] = useState("default")

    React.useEffect(() => {
    }, [])


    return (
        <View style={{ display: "flex", height: "100%" }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Выберите верное слово
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 20,
                aspectRatio: 21 / 9,
                borderRadius: 20,
                backgroundColor: '#f0f2f0',
                justifyContent: "center",
            }}>
                <Hands hands={task.show} styless={{ alignSelf: "center", justifyContent: "center" }} />
            </View>

            <FlatList style={{ marginHorizontal: 10, paddingTop: 10, }}
                data={task.variants}
                numColumns={2}
                renderItem={({ item, index }) => <TouchableOpacity
                    key={item + index + "asd"}
                    style={{
                        borderRadius: 20,
                        backgroundColor: index === selected ? "black" : '#f0f2f0',
                        margin: 10,
                        width: Dimensions.get("window").width / 2 - 30,
                        aspectRatio: 9 / 4,
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                    onPress={() => {
                        setSelected(index)
                    }}
                >
                    <Text style={{
                        alignSelf: "center",
                        color: index === selected ? "white" : 'black',
                    }}>{item}</Text>
                </TouchableOpacity>}
            // keyExtractor={item => item.id}
            />

            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 80, alignSelf: "stretch" }]}
                onPress={() => {
                    if (task.variants[selected] === task.answer) {
                        if (status === "done") {
                            giveNext()
                            return
                        }
                        setStatus("done")
                        toast.show("Корректно", {
                            type: "normal",
                            placement: "top",
                            duration: 2000,
                            animationType: "slide-in",
                        })
                    } else {
                        setStatus("wrong")
                        toast.show("Неверно, пытайтесь дальше", {
                            type: "normal",
                            placement: "top",
                            duration: 2000,
                            animationType: "slide-in",
                        })
                    }
                }}
            >
                <Text style={styles.textButtonText}>
                    {status === "default" ? "Ответить" : status === "wrong" ? "Переответить" : "Далее"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

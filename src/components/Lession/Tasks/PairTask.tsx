import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import styles from '../../../misc/Styles';
import Hands from '../Hands';

export default function PairTask({ task, giveNext }) {
    const toast = useToast()
    const [selected, setSelected] = useState(null)
    const [status, setStatus] = useState("default")
    const [positions, setPositions] = useState(task.variants[1])

    React.useEffect(() => {
    }, [])


    return (
        <View style={{ display: "flex", height: "100%" }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Подберите пару
                </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <FlatList style={{ marginHorizontal: 10, paddingTop: 10, }}
                    data={task.variants[0]}
                    numColumns={1}
                    renderItem={({ item, index }) => <View
                        key={item + index + "asd"}
                        style={{
                            borderRadius: 20,
                            backgroundColor: '#f0f2f0',
                            margin: 10,
                            width: Dimensions.get("window").width / 2 - 30,
                            aspectRatio: 9 / 4,
                            justifyContent: "center",
                            alignContent: "center"
                        }}
                    >
                        <Hands hands={item} styless={{ alignSelf: "center", justifyContent: "center" }} />
                    </View>}
                // keyExtractor={item => item.id}
                />

                <FlatList style={{ marginHorizontal: 10, paddingTop: 10, }}
                    data={positions}
                    numColumns={1}
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
                            if (selected !== null) {
                                let a = positions[index]
                                positions[index] = positions[selected]
                                positions[selected] = a
                                setPositions(positions)
                                setSelected(null)
                            } else {
                                setSelected(index)
                            }
                        }}
                    >
                        <Text style={{
                            alignSelf: "center",
                            color: index === selected ? "white" : 'black',
                        }}>{item}</Text>
                    </TouchableOpacity>}
                // keyExtractor={item => item.id}
                />

            </View>

            <View style={{flex:1}}></View>

            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 80, alignSelf: "stretch" }]}
                onPress={() => {
                    let flag = true
                    for(let i = 0; i < positions.length; i++) {
                        if (positions[i] !== task.answer[i]) {
                            flag = false
                        }
                    }
                    if (flag) {
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

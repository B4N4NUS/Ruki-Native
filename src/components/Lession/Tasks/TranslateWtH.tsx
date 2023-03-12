import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import styles from '../../../misc/Styles';
import getRandomID from '../../../misc/UUIDGenerator';
import Hands from '../Hands';

export default function TranslateWtH({ task, giveNext }) {
    const toast = useToast()
    const [selected, setSelected] = useState(null)
    const [placed, setPlaced] = useState(null)
    const [anshands, setAnshands] = useState(null)
    const [status, setStatus] = useState("default")

    React.useEffect(() => {
        let a = []
        for (let i = 0; i < task.answer.length; i++) {
            a.push(null)
        }
        setAnshands(a)
    }, [])



    const handleClick = (select, place) => {
        anshands[place] = task.variants[select]
        setAnshands(anshands)
        setSelected(null)
    }


    return (
        <View style={{ display: "flex", height: "100%" }}>
            <View style={[styles.headerContainer, { flexDirection: "column" }]}>
                <Text style={styles.headerText}>
                    Переведите предложение
                </Text>
                <Text style={{ marginTop: 10, }}>
                    {task.show}
                </Text>
            </View>

            <View style={{
                flexDirection: "row",
                marginHorizontal: 20,
                flex: 100,
                display: "flex",
                justifyContent: "center",
                alignContent:"center",
                // backgroundColor:"cyan"
            }}>
                {anshands?.map((item, i) =>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        marginHorizontal: 5,
                        aspectRatio: 3/2,
                        justifyContent: "center",
                        flex: 1,
                        backgroundColor: item !== null? '#f0f2f0': "white",
                        borderWidth: item !== null? 0: 1,
                        borderColor: "black",
                        maxHeight: 100,
                        borderRadius: 20,
                        alignSelf:"center"
                    }}
                    onPress={() => {
                        if (selected !== null) {
                            handleClick(selected, i)
                        }
                    }} key={getRandomID()}>
                        {item !== null && <Hands hands={[task.variants[item]]} styless={{ justifyContent: "center", alignSelf: "center" }} />}
                    </TouchableOpacity>
                )}
            </View>

            <FlatList style={{ marginHorizontal: 10, paddingTop: 10, }}
                data={task.variants}
                numColumns={2}
                renderItem={({ item, index }) => <TouchableOpacity
                    key={item + index + "asd"}
                    style={{
                        borderRadius: 20,
                        backgroundColor: index === selected ? "#505050" : '#f0f2f0',
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
                    <Hands hands={[item]} styless={{ justifyContent: "center", alignSelf: "center" }} />
                </TouchableOpacity>}
            // keyExtractor={item => item.id}
            />

            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 80, alignSelf: "stretch" }]}
                onPress={() => {
                    let flag = true
                    for(let i = 0; i < anshands.length; i++) {
                        if (anshands[i] !== task.answer[i]) {
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

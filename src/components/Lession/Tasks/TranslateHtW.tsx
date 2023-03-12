import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import styles from '../../../misc/Styles';
import Hands from '../Hands';

export default function TranslateHtW({ task, giveNext }) {
    const toast = useToast()
    const [text, setText] = useState("")
    const [status, setStatus] = useState("default")

    React.useEffect(() => {
    }, [])


    return (
        <View style={{ display: "flex", height: "100%" }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Переведите предложение
                </Text>
            </View>


            <View style={{
                flexDirection: "row",
                marginHorizontal: 20,
                aspectRatio: 4 / 1,
                borderRadius: 20,
                backgroundColor: '#f0f2f0',
                justifyContent: "center",
            }}>
                <Hands hands={task.show} styless={{ alignSelf: "center", justifyContent: "center" }} />
            </View>

            <View style={{flex: 1, marginHorizontal: 20,justifyContent:"center"}}>
                <TextInput style={{width:"100%", borderBottomWidth:1, borderBottomColor:'#f0f2f0', paddingTop:10}}
                placeholder='Перевод на русский язык...' 
                onChangeText={(text) => { setText(text) }}/>
            </View>

            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 80, alignSelf: "stretch" }]}
                onPress={() => {
                    let flags = []
                    let tx = text.split(" ")
                    for (let i = 0; i < task.answer.length; i++) {
                        let flag = false
                        for (let j = 0; j < tx.length; j++) {
                            if (tx[j].toLocaleLowerCase().includes(task.answer[i])) {
                                flag = true
                            }
                        }
                        flags.push(flag)
                    }
                    let flag = true
                    for (let i = 0; i < flags.length; i++) {
                        if (!flags[i]) {
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

import React, { useEffect } from "react";
import { useState } from "react";
import { TextInput, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { getAllDictionaries, getAllTasks, getDictById } from "../../misc/TasksAndLessions";
import Hands from "./Hands";

export default function DictionaryList({ theme }) {
    const [dic, setDic] = useState(null)

    useEffect(() => {
        if (theme) {
            getDictById(theme.dictionaryId).then((response) => {
                setDic(response.vocab)
                console.log("response")
                console.log(response.vocab.length)
            })
        }
    }, [theme])

    return <ScrollView style={{ marginHorizontal:20}}>
        {dic && dic.map((item) =>
            <TouchableOpacity style={{ flexDirection:"row", marginVertical:5,borderRadius:20, backgroundColor:'#f0f2f0', padding:30}}>
                <Hands hands={item.hand}/>
                <Text style={{alignSelf:"center"}}>
                    {item.word}
                </Text>
            </TouchableOpacity>
        )}
    </ScrollView>
}
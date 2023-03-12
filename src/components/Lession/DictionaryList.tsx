import React, { useEffect } from "react";
import { useState } from "react";
import { TextInput, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { getAllDictionaries, getAllTasks, getDictById } from "../../misc/TasksAndLessions";
import getRandomID from "../../misc/UUIDGenerator";
import DictionaryItem from "./DictionaryItem";
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

    return <ScrollView style={{ marginHorizontal:20}} showsVerticalScrollIndicator={false}>
        {dic && dic.map((item, i) =>
            <DictionaryItem hands={item.hand} words={item.word} key={getRandomID()}/>
        )}
    </ScrollView>
}
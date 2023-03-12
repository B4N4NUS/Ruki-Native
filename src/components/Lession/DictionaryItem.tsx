import React, { useEffect } from "react";
import { useState } from "react";
import { TextInput, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { getAllDictionaries, getAllTasks, getDictById } from "../../misc/TasksAndLessions";
import Hands from "./Hands";

export default function DictionaryItem({ hands, words }) {
    const [translate, setTranslate] = useState(false)

    return <TouchableOpacity style={{ 
        flexDirection: "row", 
        marginVertical: 5, 
        borderRadius: 20, 
        backgroundColor: '#f0f2f0', 
        justifyContent:"center",
        paddingHorizontal:30, 
        paddingVertical:30 }}
        onPress={() => {
            setTranslate(!translate)
        }}>
        <Hands hands={hands} styless={{alignSelf: "center" , flex:1, justifyContent: translate? "flex-start": "center"}} />
        {translate && <View style={{flex:1}}/>}
        {translate &&<Text style={{ flex:1,alignSelf: "center",  fontWeight: 'bold', fontSize:17}}>
            {words}
        </Text> }
    </TouchableOpacity>
}
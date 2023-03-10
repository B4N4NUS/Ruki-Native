import React from "react";
import { useState } from "react";
import { TextInput, View } from "react-native";

export default function ProgressBar({counter, length}:{counter:number, length: number}) {
    return <View style={{
        position:"relative",
        borderRadius:10,
        paddingVertical:4,
        backgroundColor:'#f0f2f0',
        marginHorizontal:80,
        marginVertical:10,
    }}>
        <View style={{
            backgroundColor:"black",
            left:0,
            position:"absolute",
            paddingVertical:4,
            borderRadius:10,
            width: counter/length*100 + "%"
        }}>

        </View>
    </View>
}
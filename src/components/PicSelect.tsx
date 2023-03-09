import { getStorage } from "firebase/storage";
import React from "react";
import { useEffect, useState } from "react";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../misc/Styles";
import { Image, FlatList, TouchableOpacity } from 'react-native'

export default function PicSelect() {
    const [pics, setPics] = useState<string[]>()

    useEffect(() => {
        let aboba = []
        for (let i = 0; i < 6; i++) {
            aboba.push("https://sun9-47.userapi.com/impg/ySXkFICrddSwKeK2Ne5oYpqOspq2whf6G6_kTg/d7CByyZkLa4.jpg?size=1080x847&quality=95&sign=21f229383765a496d36ee24ab22c3cd7&type=album")
        }
        setPics(aboba)
    }, [])


    return (
        <FlatList
            data={pics}
            numColumns={3}
            initialNumToRender={10}
            maxToRenderPerBatch={2}
            onEndReachedThreshold={0.1}
            style={{
                backgroundColor: "#303030"
            }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate("Character", { options: options, character: item })
                    }}
                >
                    <Image style={styles.avatar} source={{ uri: item }} />
                </TouchableOpacity>
            )}>
        </FlatList>
    )
}
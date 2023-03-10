import { getStorage } from "firebase/storage";
import React from "react";
import { useEffect, useState } from "react";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../misc/Styles";
import { Image, FlatList, TouchableOpacity, View } from 'react-native'
import IProfile from "../interfaces/IProfile";

export default function PicSelect({ setPic, showPicker }: {setPic:  React.Dispatch<React.SetStateAction<string>>, showPicker: React.Dispatch<React.SetStateAction<boolean>>}) {
    const pics = ["https://sun9-31.userapi.com/impg/TbJfd0klbEzMN_W9a24vkrjMCh1hogQ27xhRAg/Sfp80wWvaMo.jpg?size=400x400&quality=96&sign=3edd73a13e514c321cf4acd68035a585&type=album",
        "https://sun1-54.userapi.com/impg/3AmgiE1f7E8HA88GKRr-K8TniEJ_bOLZUkSITg/q1RzZE4KkRY.jpg?size=400x400&quality=96&sign=6894f8f7066eb4940c2bd1a012d4f1f2&type=album",
        "https://sun9-80.userapi.com/impg/5ciwgJqiGeS90DCw6RZxeCzKe7HKw7lYLsahxQ/JJdyrDcsOMQ.jpg?size=400x400&quality=96&sign=2e8f32c72d7af03eeb97736af361f9ce&type=album",
        "https://sun1-89.userapi.com/impg/sE2IXHyZqUqVRat_0DjbM-bLCFS2HrZQwG1TLA/6DpFtYtVoqU.jpg?size=400x400&quality=96&sign=265879c106db88a9f243ba045069587a&type=album",
        "https://sun1-98.userapi.com/impg/dSAbd7wH0HEIVrgmJL47czTqDwFiU_nr-_OQXQ/xkONU5OP35M.jpg?size=400x400&quality=96&sign=12e9eef23cb087a6f7916e729e5edc35&type=album",
        "https://sun9-43.userapi.com/impg/Jn9Ic5QSjwFhnzAYBN_uHAZAb6qnHGRuLW9xzw/Ak4bxIfvi8s.jpg?size=400x400&quality=96&sign=b637de6d36ec0a02d65b8bcd93bf0d29&type=album"]

    return (
        <TouchableOpacity style={{height:"100%",width:"100%", position:"absolute", alignItems:"center", justifyContent:"center", zIndex:30, top:"10%"}}
        onPress={() => {
            showPicker(false)
        }}>
            <FlatList
                data={pics}
                numColumns={2}
                initialNumToRender={10}
                maxToRenderPerBatch={2}
                onEndReachedThreshold={0.1}
                style={{
                    backgroundColor: "transparent",
                    alignSelf: "center"
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setPic(item)
                            showPicker(false)
                        }}
                    >
                        <Image style={styles.avatar} source={{ uri: item }} />
                    </TouchableOpacity>
                )}>
            </FlatList>
        </TouchableOpacity>
    )
}
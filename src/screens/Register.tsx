import { View, Text, TouchableOpacity } from "react-native";
import * as React from 'react';
import LoginPic from "../assets/pics/login";
import styles from "../misc/Styles";
import { signInWithPopup } from "firebase/auth";
import { auth, getPopUpSign } from "../misc/Firebase";

export default function Register({ route, navigation }) {


    return (
        <View style={styles.screenContainer}>
            <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            </View>
            <View style={{ flex: 0, marginHorizontal: 30, }}>

                <LoginPic width={350} height={350} style={{ flex: 1 }} />
                <Text style={[styles.bigBlackText, { textAlign: "left", marginVertical: 30 }]}>
                    Регистрация
                </Text>
                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0 }]}
                    onPress={() => {
                        navigation.navigate("RegisterEmail")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        Через эл. почту
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginBottom: 40, }]}
                    onPress={() => {
                        getPopUpSign()
                    }}>
                    <Text style={[styles.textButtonText]}>
                        Через Google аккаунт
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
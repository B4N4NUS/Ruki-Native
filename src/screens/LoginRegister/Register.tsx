import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import * as React from 'react';
import { signInWithPopup } from "firebase/auth";
import LoginPic from "../../assets/pics/login";
import { getPopUpSign } from "../../misc/Firebase";
import styles from "../../misc/Styles";

export default function Register({ route, navigation }) {


    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{ flex: 0.3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            </View>
            <View style={{ flex: 1, marginHorizontal: 30, justifyContent: "flex-end", display: "flex" }}>
                <View style={[{ flex: 1, justifyContent: "center", alignItems:"center" }]}>
                    <LoginPic height={"100%"} />
                </View>
                <View>
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
        </SafeAreaView>
    )
}
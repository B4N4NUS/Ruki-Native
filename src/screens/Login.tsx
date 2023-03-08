import { View, Text, TextInput } from "react-native";
import * as React from 'react';
import styles from "../misc/Styles";
import LoginPic from "../assets/pics/login";
import StartPic from "../assets/pics/start";
import { TouchableOpacity } from "react-native";
import { FancyTextInput } from "../components/FancyTextInput";

export default function Login({ route, navigation }) {
    return <View style={styles.screenContainer}>
        <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text style={[{ flex: 0.3 }, styles.bigBlackText]}>
                Добро {"\n"}пожаловать!
            </Text>
            <StartPic width="80%" style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 1, marginHorizontal: 30, }}>
            <Text style={[styles.bigBlackText, { textAlign: "left", marginBottom: 30, }]}>
                Вход
            </Text>
            <Text style={styles.littleText}>
                Эл. почта
            </Text>
            <FancyTextInput style={styles.wideInput}/>


            <Text style={styles.littleText}>
                Пароль
            </Text>
            <FancyTextInput style={styles.wideInput}/>



            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 40 }]}
            onPress={() => {
                navigation.navigate("Main")
            }}
            >
                <Text style={styles.textButtonText}>
                    Войти
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0 }]}>
                <Text style={[styles.textButtonText, { color: "black" }]}>
                    Войти через Google
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}
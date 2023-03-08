import { View, Text, TouchableOpacity } from "react-native";
import * as React from 'react';
import LoginPic from "../assets/pics/login";
import styles from "../misc/Styles";
import StartPic from "../assets/pics/start";
import { FancyTextInput } from "../components/FancyTextInput";

export default function RegisterEmail({ route, navigation }) {
    return (
        <View style={styles.screenContainer}>
            <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <LoginPic style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 1, marginHorizontal: 30, }}>
                <Text style={[styles.bigBlackText, { textAlign: "left", marginBottom: 30, }]}>
                    Регистрация
                </Text>
                <Text style={styles.littleText}>
                    Имя
                </Text>
                <FancyTextInput style={styles.wideInput} />
                <Text style={styles.littleText}>
                    Эл. почта
                </Text>
                <FancyTextInput style={styles.wideInput} />


                <Text style={styles.littleText}>
                    Пароль
                </Text>
                <FancyTextInput style={styles.wideInput} />



                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 40 }]}
                    onPress={() => {
                        navigation.navigate("Main")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
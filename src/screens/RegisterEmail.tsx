import { View, Text, TouchableOpacity } from "react-native";
import * as React from 'react';
import LoginPic from "../assets/pics/login";
import styles from "../misc/Styles";
import StartPic from "../assets/pics/start";
import { FancyTextInput } from "../components/FancyTextInput";
import { auth } from "../misc/Firebase";

export default function RegisterEmail({ route, navigation }) {
    const [name, setName] = React.useState("")
    const [login, setLogin] = React.useState("")
    const [pass, setPass] = React.useState("")

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(login, pass).then(userCredentials => {
            const user = userCredentials.user
            console.log("Registered with: " + user.email)
            navigation.navigate("OnBoarding")
        }).catch(error => alert("Network Error"))
    }

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
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => { setName(text) }} />
                <Text style={styles.littleText}>
                    Эл. почта
                </Text>
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => { setLogin(text) }} />


                <Text style={styles.littleText}>
                    Пароль
                </Text>
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => { setPass(text) }}  />



                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 40 }]}
                    onPress={() => {
                        handleSignUp()
                        // navigation.navigate("Main")
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
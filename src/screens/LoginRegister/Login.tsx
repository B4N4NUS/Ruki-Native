import { View, Text, TextInput } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import StartPic from "../../assets/pics/start";
import { TouchableOpacity } from "react-native";
import { FancyTextInput } from "../../components/FancyTextInput";
import { auth } from "../../misc/Firebase";

export default function Login({ route, navigation }) {
    const [login, setLogin] = React.useState("")
    const [pass, setPass] = React.useState("")

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(login, pass).then(userCredentials => {
            const user = userCredentials.user
            console.log("Logged in with: " + user.email)
            // mainOptions.login = login
            // mainOptions.pass = pass

            // if (saveLogin) {
            //     storeData({ login: mainOptions.login, pass: mainOptions.pass })
            // } else {
            //     storeData(null)
            // }

            navigation.navigate("Main")
        }).catch(error => alert(error.message))
    }

    return <View style={styles.screenContainer}>
        <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <View style={[{ flex: 1, justifyContent: "center",alignItems:"center" }]}>
                <StartPic height={"100%"} />
            </View>
        </View>

        <View style={{ flex: 1, marginHorizontal: 30,justifyContent:"flex-end" }}>
            <Text style={[styles.bigBlackText, { textAlign: "left", marginBottom: 30, }]}>
                Вход
            </Text>
            <Text style={styles.littleText}>
                Эл. почта
            </Text>
            <FancyTextInput style={styles.wideInput}  onChangeText={(text) => { setLogin(text) }}/>


            <Text style={styles.littleText}>
                Пароль
            </Text>
            <FancyTextInput style={styles.wideInput}  onChangeText={(text) => { setPass(text) }}/>



            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 40 }]}
                onPress={() => {
                    handleLogin()
                }}
            >
                <Text style={styles.textButtonText}>
                    Войти
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0,marginBottom: 40,  }]}>
                <Text style={[styles.textButtonText, { color: "black" }]}>
                    Войти через Google
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}
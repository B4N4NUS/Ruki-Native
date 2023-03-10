import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import * as React from 'react';
import LoginPic from "../../assets/pics/login";
import { FancyTextInput } from "../../components/FancyTextInput";
import { auth, storeProfile } from "../../misc/Firebase";
import styles from "../../misc/Styles";
import { storeAsyncStorageLoginPass } from "../../misc/AsyncStorage";
import { useToast } from "react-native-toast-notifications";

export default function RegisterEmail({ route, navigation }) {
    const [name, setName] = React.useState("")
    const [login, setLogin] = React.useState("")
    const [pass, setPass] = React.useState("")
    const toast = useToast()

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(login, pass).then(userCredentials => {
            const user = userCredentials.user
            console.log("Registered with: " + user.email)
            storeAsyncStorageLoginPass({login: login, pass:pass})
            storeProfile({
                name: name,
                imageUri: "",
                email: login,
                phone: "",
                username: "user6t873845",
                pushClasses: false,
                pushUpdates: false,
            }).then(() => navigation.navigate("OnBoarding"))
        }).catch(error => toast.show(error.message, {
            type: "normal",
            placement: "top",
            duration: 2000,
            animationType: "slide-in",
          }))
    }

    return (
        <SafeAreaView style={styles.screenContainer}>

            <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
                    <LoginPic height={"100%"} />
                </View>
            </View>

            <View style={{ flex: 1, marginHorizontal: 30, justifyContent: "flex-end" }}>
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
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => { setPass(text) }} />



                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 40, }]}
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
        </SafeAreaView>
    )
}
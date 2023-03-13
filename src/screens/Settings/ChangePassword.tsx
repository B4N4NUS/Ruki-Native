import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import { FancyTextInput } from "../../components/FancyTextInput";
import IProfile from "../../interfaces/IProfile";
// import { auth, getProfile, storeProfile } from "../../misc/Firebase";
import { getAsyncStorageLoginPass, storeAsyncStorageLoginPass } from "../../misc/AsyncStorage";
import firebase from "firebase/compat/app";
import { StackActions } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";

export default function ChangePassword({ route, navigation }) {
    const toast = useToast()
    const [pass, setPass] = React.useState("")
    const [newPass2, setNewPass2] = React.useState("")
    const [newPass, setNewPass] = React.useState("")

    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const changePassword = (currentPassword, newPassword) => {
        reauthenticate(currentPassword).then((response) => {
            if (newPass === newPass2) {
                var user = firebase.auth().currentUser;
                user.updatePassword(newPassword).then(() => {
                    navigation.dispatch(StackActions.pop(1))
                    storeAsyncStorageLoginPass({login:user.email, pass:newPass})
                }).catch((error) => { console.log(error); });
            } else {
                toast.show("Пароли не совпадают", {
                    type: "normal",
                    placement: "top",
                    duration: 2000,
                    animationType: "slide-in",
                  })
            }
        }).catch((error) => {
            toast.show(error.message, {
                type: "normal",
                placement: "top",
                duration: 2000,
                animationType: "slide-in",
              })
        });
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Изменение пароля
                </Text>
            </View>

            <ScrollView style={{ marginHorizontal: 20, }}>

                <FancyTextInput style={styles.wideInput} placeholder={"Старый пароль"} onChangeText={(text) => {
                    setPass(text)
                }} />

                <FancyTextInput style={styles.wideInput} placeholder={"Новый пароль"} onChangeText={(text) => {
                    setNewPass(text)
                }} />
                <FancyTextInput style={styles.wideInput} placeholder={"Повторите пароль"} onChangeText={(text) => {
                    setNewPass2(text)
                }} />

                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 20, }]} onPress={() => {
                    changePassword(pass, newPass)
                }}>
                    <Text style={styles.textButtonText}>
                        Сохранить
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
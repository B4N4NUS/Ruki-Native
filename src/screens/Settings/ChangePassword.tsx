import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import { FancyTextInput } from "../../components/FancyTextInput";
import IProfile from "../../interfaces/IProfile";
// import { auth, getProfile, storeProfile } from "../../misc/Firebase";
import { getAsyncStorageLoginPass, storeAsyncStorageLoginPass } from "../../misc/AsyncStorage";
import firebase from "firebase/compat";
import { StackActions } from "@react-navigation/native";

export default function ChangePassword({ route, navigation }) {

    const [pass, setPass] = React.useState("")
    const [newPass2, setNewPass2] = React.useState("")
    const [newPass, setNewPass] = React.useState("")

    // const changePass = () => {
    //     getAsyncStorageLoginPass().then((response) => {
    //         if (response.pass === pass) {
    //             if (newPass === newPass2) {
    //                 const emailCred = firebase.auth.EmailAuthProvider.credential(auth.currentUser.email, pass);
    //                 firebase.auth().currentUser.reauthenticateWithCredential(emailCred).then(() => {
    //                     // User successfully reauthenticated.
    //                     const newPass = window.prompt('Please enter new password');
    //                     navigation.navigate("Settings")
    //                     return firebase.auth().currentUser.updatePassword(newPass);
    //                 }).catch((e) => alert(e.message))
    //             } else {
    //                 alert("Новые пароли не совпадают")
    //             }
    //         } else {
    //             alert("Неправильный пароль")
    //             setPass("")
    //         }
    //     })
    // }
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
                alert("Новые пароли не совпадают")
            }
        }).catch((error) => {
            alert("Неправильный пароль")
            setPass("")
        });
    }

    // const currentPass = window.prompt('Please enter current password');
    // const emailCred = auth.EmailAuthProvider.credential(
    //     auth.currentUser, currentPass);
    // auth.currentUser.reauthenticateWithCredential(emailCred).then(() => {
    //         // User successfully reauthenticated.
    //         const newPass = window.prompt('Please enter new password');
    //         return auth.currentUser.updatePassword(newPass);
    //     })



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
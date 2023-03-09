import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import * as React from 'react';
import LoginPic from "../assets/pics/login";
import styles from "../misc/Styles";
import { storeAsyncStorageLoginPass } from "../misc/AsyncStorage";
import { useState } from "react";
import { auth } from "../misc/Firebase";
import { deleteUser } from "firebase/auth";

export default function Settings({ route, navigation }) {
    // const { options } = route.params

    

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Настройки
                </Text>
            </View>

            <ScrollView>
                <TouchableOpacity style={styles.settingsButton} onPress={() => {
                    navigation.navigate("Settings-RedactProfile")
                }}>
                    <Text>
                        Редактирования профиля
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton} onPress={() => {
                    navigation.navigate("Settings-ChangePassword")
                }}>
                    <Text>
                        Изменение пароля
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}>
                    <Text>
                        Push-Уведомления
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton} onPress={() => {
                    storeAsyncStorageLoginPass(null).then(() => navigation.reset({
                        index: 0,
                        routes: [{name: 'Welcome'}],
                      })).catch((e)=>alert(e.message))
                    
                }}>
                    <Text>
                        Выход
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.settingsButton, { opacity: 0.5 }]} onPress={() => {
                    const user = auth.currentUser;
                    deleteUser(user).then(() => {
                    navigation.navigate("Welcome")
                    }).catch((error) => {
                    alert("Простите, вы настолько нам понравились, что мы решили ни за что не удалять ваш аккаунт")
                    });
                }}>
                    <Text>
                        Удалить аккаунт
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
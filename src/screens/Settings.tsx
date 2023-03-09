import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import * as React from 'react';
import LoginPic from "../assets/pics/login";
import styles from "../misc/Styles";

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
                <TouchableOpacity style={styles.settingsButton}>
                    <Text>
                        Изменение пароля
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}>
                    <Text>
                        Push-Уведомления
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton}>
                    <Text>
                        Выход
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.settingsButton, { opacity: 0.5 }]}>
                    <Text>
                        Удалить аккаунт
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
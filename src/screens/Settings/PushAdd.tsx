import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import { FancyTextInput } from "../../components/FancyTextInput";
import IProfile from "../../interfaces/IProfile";
import { getProfile, storeProfile } from "../../misc/Firebase";

export default function PushAdd({ route, navigation }) {
    const [user, setUser] = React.useState<IProfile | null>(null)

    React.useEffect(() => {
        getProfile().then((response) => {
            setUser(response)
            console.log("got user profile: ")
            console.log(response)
        })
    }, [])


    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Редактирование профиля
                </Text>
            </View>

            <ScrollView>
                <Text style={styles.littleText}>
                    Имя
                </Text>
                <FancyTextInput style={styles.wideInput} placeholder={user.name} onChangeText={(text) => {
                    user.name = text
                    setUser(user)
                }} />

                <Text style={styles.littleText}>
                    Юзернейм
                </Text>
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => {
                    user.username = text
                    setUser(user)
                 }} />

                <Text style={styles.littleText}>
                    Эл. почта
                </Text>
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => { 
                    user.name = text
                    setUser(user)
                 }} />

                <Text style={styles.littleText}>
                    Номер телефона
                </Text>
                <FancyTextInput style={styles.wideInput} onChangeText={(text) => { 
                    user.phone = text
                    setUser(user)
                 }} />


                <TouchableOpacity style={styles.textButton} onPress={() => {
                    storeProfile(user).then((response) => {
                        navigation.navigate("Settings")
                    })
                }}>
                    <Text>
                        Сохранить
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import { FancyTextInput } from "../../components/FancyTextInput";
import IProfile from "../../interfaces/IProfile";
import { getProfile, storeProfile } from "../../misc/Firebase";
import CamIcon from "../../assets/icons/cam";

export default function RedactProfile({ route, navigation }) {
    const [user, setUser] = React.useState<IProfile | null>(null)
    // const { options } = route.params

    React.useEffect(() => {
        getProfile().then((response) => {
            setUser(response)
            console.log("got user profile: ")
            console.log(response)
        })
    }, [])


    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Редактирование профиля
                </Text>
            </View>

            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={{position:"relative"}}>
                    <Image style={[styles.avatar, { margin: 20, alignSelf: "center", opacity:0.5 }]} source={user?.imageUri ? { uri: user.imageUri } : require("../../assets/images/profile_icon.png")} />
                    <TouchableOpacity style={{position:"absolute", alignSelf:"center", top:"45%", justifyContent: 'center', alignItems: 'center'}}>
                        <CamIcon/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.littleText}>
                    Имя
                </Text>
                <FancyTextInput style={styles.wideInput} defaultValue={user?.name} onChangeText={(text) => {
                    user.name = text
                    setUser(user)
                }} />

                <Text style={styles.littleText}>
                    Юзернейм
                </Text>
                <FancyTextInput style={styles.wideInput} defaultValue={user?.username} onChangeText={(text) => {
                    user.username = text
                    setUser(user)
                }} />

                <Text style={styles.littleText}>
                    Эл. почта
                </Text>
                <FancyTextInput style={styles.wideInput} defaultValue={user?.email} onChangeText={(text) => {
                    user.email = text
                    setUser(user)
                }} />

                <Text style={styles.littleText}>
                    Номер телефона
                </Text>
                <FancyTextInput style={styles.wideInput} defaultValue={user?.phone} onChangeText={(text) => {
                    user.phone = text
                    setUser(user)
                }} />


                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0 }]} onPress={() => {
                    storeProfile(user).then((response) => {
                        navigation.navigate("Settings")
                        // options.update()
                    }).catch((e) => alert(e))
                }}>
                    <Text style={styles.textButtonText}>
                        Сохранить
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import { FancyTextInput } from "../../components/FancyTextInput";
import IProfile from "../../interfaces/IProfile";
import { getProfile, storeProfile } from "../../misc/Firebase";
import CamIcon from "../../assets/icons/cam";
import DocumentPicker from "react-native-document-picker";
import PicSelect from "../../components/PicSelect";

export default function RedactProfile({ route, navigation }) {
    const [user, setUser] = React.useState<IProfile | null>(null)
    const [pic, setPic] = React.useState("")
    const [showPicker, setShowPicker] = React.useState(false)
    // const { options } = route.params

    React.useEffect(() => {
        getProfile().then((response) => {
            if (pic !== "") {
                response.imageUri = pic
            }
            setUser(response)
            console.log("got user profile: ")
            console.log(response)
        })
    }, [pic])


    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Редактирование профиля
                </Text>
            </View>

            {showPicker && <PicSelect setPic={setPic} showPicker={setShowPicker} />}

            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={{ position: "relative" }}>
                    <Image style={[styles.avatar, { margin: 20, alignSelf: "center", opacity: 0.5 }]} source={user?.imageUri ? { uri: user.imageUri } :
                        { uri: "https://sun1-14.userapi.com/impg/jhJ5bKuIELN9NPIQIAvSxWUqQEyht9GFuXaUNA/ufsy0JoAQUk.jpg?size=400x400&quality=96&sign=45c3f28bc82aa689d2fbb493ab0e9d6c&type=album" }} />
                    <TouchableOpacity style={{ position: "absolute", alignSelf: "center", top: "45%", justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            // docPicker()
                            setShowPicker(true)
                        }}>
                        <CamIcon />
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
                    user.imageUri = pic
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
        </SafeAreaView>
    )
}
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import * as React from 'react';
import styles from "../../misc/Styles";
import { FancyTextInput } from "../../components/FancyTextInput";
import IProfile from "../../interfaces/IProfile";
import { getProfile, storeProfile } from "../../misc/Firebase";
import CamIcon from "../../assets/icons/cam";
import DocumentPicker from "react-native-document-picker";

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

    const  docPicker = async() => {
        // Pick a single file
        try {
          const res = await DocumentPicker.pick({
           //by using allFiles type, you will able to pick any type of media from user device, 
        //There can me more options as well
        //DocumentPicker.types.images: All image types
        //DocumentPicker.types.plainText: Plain text files
        //DocumentPicker.types.audio: All audio types
       //DocumentPicker.types.pdf: PDF documents
       //DocumentPicker.types.zip: Zip files
       //DocumentPicker.types.csv: Csv files
       //DocumentPicker.types.doc: doc files
       //DocumentPicker.types.docx: docx files
      //DocumentPicker.types.ppt: ppt files
      //DocumentPicker.types.pptx: pptx files
      //DocumentPicker.types.xls: xls files
      //DocumentPicker.types.xlsx: xlsx files
      //For selecting more more than one options use the 
     //type: [DocumentPicker.types.csv,DocumentPicker.types.xls]
             type: [DocumentPicker.types.allFiles],
          });
          console.log(
            res.uri,
            res.type, // mime type
            res.name,
            res.size
          );
        //   this.uploadAPICall(res);//here you can call your API and send the data to that API
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log("error -----", err);
          } else {
            throw err;
          }
        }
      }


    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Редактирование профиля
                </Text>
            </View>

            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={{position:"relative"}}>
                    <Image style={[styles.avatar, { margin: 20, alignSelf: "center", opacity:0.5 }]} source={user?.imageUri ? { uri: user.imageUri } : require("../../assets/images/profile_icon.png")} />
                    <TouchableOpacity style={{position:"absolute", alignSelf:"center", top:"45%", justifyContent: 'center', alignItems: 'center'}}
                    onPress={()=> {
                        docPicker()
                    }}>
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
        </SafeAreaView>
    )
}
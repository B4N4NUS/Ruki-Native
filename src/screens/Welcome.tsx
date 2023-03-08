import { View, Text, Image, TouchableOpacity } from "react-native";
import LoginPic from "../assets/pics/login";
import StartPic from "../assets/pics/start";
import styles from "../misc/Styles";

export default function Welcome({ route, navigation }) {
    return (
        <View style={styles.screenContainer}>
            <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text style={[{ flex: 0.3 }, styles.bigBlackText]}>
                    Добро {"\n"}пожаловать!
                </Text>
                <LoginPic width={400} height={400} style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 0 }}>
                <TouchableOpacity style={styles.textButton}
                    onPress={() => {
                        navigation.navigate("Login")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        Войти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textButton, {marginBottom:40,}]}
                    onPress={() => {
                        navigation.navigate("Register")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
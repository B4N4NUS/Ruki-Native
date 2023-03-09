import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import LoginPic from "../../assets/pics/login";
import styles from "../../misc/Styles";

export default function Welcome({ route, navigation }) {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <View style={[{ flex: 0.6, justifyContent:"center"}]}>
                    <Text style={[styles.bigBlackText]}>
                        Добро {"\n"}пожаловать!
                    </Text>
                </View>
                <View style={[{ flex: 1, justifyContent:"center",alignItems:"center" }]}>
                    <LoginPic height={"100%"} />
                </View>
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
                <TouchableOpacity style={[styles.textButton, { marginBottom: 40, }]}
                    onPress={() => {
                        navigation.navigate("Register")
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
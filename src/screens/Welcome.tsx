import { View, Text, Image,  TouchableOpacity  } from "react-native";
import LoginPic from "../assets/pics/login";
import StartPic from "../assets/pics/start";
import styles from "../misc/Styles";

export default function Welcome(navigation) {
    return (
        <View style={styles.screenContainer}>
            <View style={{flex:1,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontWeight:"bold", textAlign:"center", fontSize:24, flex:0.3, alignItems:"center", justifyContent:"center"}}>
                    Добро {"\n"}пожаловать!
                </Text>
                <LoginPic style={{flex:1 }}/>
            </View>
            <View style={{flex:0}}>
                <TouchableOpacity style={styles.textButton}>
                    <Text style={styles.textButtonText}>
                        Войти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textButton}>
                    <Text style={styles.textButtonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
import { StackActions, useFocusEffect, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ConfirmIcon from '../../assets/icons/confirm';
import ExitIcon from '../../assets/icons/exit';
import SettingsIcon from '../../assets/icons/settings';
import AchievementList from '../../components/AchievementList';
import ProgressBar from '../../components/Lession/ProgressBar';
import PairTask from '../../components/Lession/Tasks/PairTask';
import TranslateHtW from '../../components/Lession/Tasks/TranslateHtW';
import TranslateWtH from '../../components/Lession/Tasks/TranslateWtH';
import WordTask from '../../components/Lession/Tasks/WordTask';
import ProfileCard from '../../components/ProfileCard';
import IProfile from '../../interfaces/IProfile';
import { getProfile, getThemeProgress } from '../../misc/Firebase';
import styles from '../../misc/Styles';

export default function Congrads({ route, navigation }) {
    const [theme, setTheme] = React.useState(null)
    const { options } = route.params

    React.useEffect(() => {
        setTheme(options.theme)
    }, [])

    return (
        <SafeAreaView style={[styles.screenContainer, {}]}>
            <View style={{ display: "flex", height: "100%" }}>


                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                    <View style={{
                        backgroundColor: "black",
                        borderRadius: 50,
                        padding: 10,
                        marginBottom: 30,
                    }}>
                        <ConfirmIcon height={40} width={40} />
                    </View>

                    <Text>
                        {theme?.name + " пройдена!"}
                    </Text>
                    <Text>
                        Вы отлично справляетесь
                    </Text>
                </View>


                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 40, alignSelf: "stretch" }]}
                    onPress={() => {
                        navigation.navigate("Main")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        Далее
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

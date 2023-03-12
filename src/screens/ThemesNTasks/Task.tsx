import { StackActions, useFocusEffect, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
import { getProfile, getThemeProgress, storeThemeProgress } from '../../misc/Firebase';
import styles from '../../misc/Styles';

export default function Task({ route, navigation }) {
    const [theme, setTheme] = React.useState(null)
    const [tasks, setTasks] = React.useState(null)
    const [counter, setCounter] = React.useState(1)
    const [length, setLength] = React.useState(1)
    const { options } = route.params

    React.useEffect(() => {
        setTasks(options.tasks)
        setTheme(options.theme)
        setLength(options.tasks.length)
        setCounter(options.start)
    }, [])

    const giveNext = () => {
        storeThemeProgress(theme.id, counter + 1, length)
        if (counter + 1 === tasks.length) {
            const popAction = StackActions.pop(1);
            navigation.dispatch(popAction);
            navigation.navigate("Congrads", { options: { theme: theme } })
            return
        }
        setCounter(counter + 1)
    }


    return (
        <SafeAreaView style={[styles.screenContainer, {}]}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => {
                    const popAction = StackActions.pop(1);
                    navigation.dispatch(popAction);
                }}>
                <ExitIcon width={50} height={50} />
                </TouchableOpacity>
                <View style={{
                    position: "relative",
                    borderRadius: 10,
                    flex: 1,
                    height: 6,
                    // backgroundColor:"cyan",
                    backgroundColor: '#f0f2f0',
                    marginHorizontal: 20,
                    marginVertical: 10,
                    alignSelf: "center"
                }}>
                    <View style={{
                        backgroundColor: "black",
                        left: 0,
                        position: "absolute",
                        height: 6,
                        borderRadius: 10,
                        width: counter / length * 100 + "%"
                    }}>

                    </View>
                </View>
                <View style={{ width: 50, height: 50 }}></View>
            </View>
            {tasks && tasks[counter].type === "word" && <WordTask task={tasks[counter]} giveNext={giveNext} />}
            {tasks && tasks[counter].type === "pair" && <PairTask task={tasks[counter]} giveNext={giveNext} />}
            {tasks && tasks[counter].type === "translateHtW" && <TranslateHtW task={tasks[counter]} giveNext={giveNext} />}
            {tasks && tasks[counter].type === "translateWtH" && <TranslateWtH task={tasks[counter]} giveNext={giveNext} />}
        </SafeAreaView>
    );
};

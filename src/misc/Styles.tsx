import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screenContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    textButton: {
        borderRadius: 15,
        backgroundColor: "black",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
    },
    textWhiteButton: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
    },
    textButtonText: {
        textAlign: "center",
        color: "white",
    },
    bigBlackText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    headerContainer: {
        flexDirection: "row",
        display: "flex",
        marginHorizontal: 20,
        marginBottom: 30,
    },
    headerText: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    littleText: {
        fontSize: 10,
        textAlign: "left",
        color: "#919191"
    },
    wideInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    settingsContainer: {
        margin: 20,
        flexDirection: "column"
    },
    settingsButton: {
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: "#E4E4E4"
    },
    avatar: {
        borderRadius: 70,
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: "black"
    },
    hand: {
        width: 40,
        minWidth: 40,
        aspectRatio: 1,
        resizeMode: "contain"
    }

});

export default styles
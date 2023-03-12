import AsyncStorage from "@react-native-async-storage/async-storage"

export const getAsyncStorageLoginPass = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("@logpass")
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        console.log(e)
    }
}

export const storeAsyncStorageLoginPass = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("@logpass", jsonValue)
    } catch (e) {
        console.log(e)
    }
}
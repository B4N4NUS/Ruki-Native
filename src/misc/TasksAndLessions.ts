
const additionString = "V2-"


export const getAllThemes = async () => {
    const apiResponse = await fetch(
        "http://ebreak.ru/"+additionString+"Themes.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        return data.themes
    }
    return null
}

export const getAllTasks = async () => {
    const apiResponse = await fetch(
        "http://ebreak.ru/"+additionString+"Tasks.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        return data.tasks
    }
    return null
}

export const getAllDictionaries = async () => {
    const apiResponse = await fetch(
        "http://ebreak.ru/"+additionString+"Dictionaries.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        console.log(data)
        return data.dictionaries
    }
    return null
}

export const getDictById = async (id: number) => {
    // getAllDictionaries().then((response) => {
    //     return response.find((item) => item.id === id)
    // }).catch((e) => {return null})
    const apiResponse = await fetch(
        "http://ebreak.ru/"+additionString+"Dictionaries.json"
    );
    if (apiResponse.ok) {
        // console.log(apiResponse.body)
        const data = await apiResponse.json();
        
        return data.dictionaries.find((item) => item.id === id)
    }
    // console.log(apiResponse)
    return null
}

export const getTaskById = async (id: number) => {
    const apiResponse = await fetch(
        "http://ebreak.ru/"+additionString+"Tasks.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();

        return data.tasks.find((item) => item.id === id)
    }
    return null
}

export const getThemesById = async (id: number) => {
    const apiResponse = await fetch(
        "http://ebreak.ru/"+additionString+"Themes.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        
        return data.themes.find((item) => item.id === id)
    }
    return null
}
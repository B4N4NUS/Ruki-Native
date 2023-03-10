
export const getAllThemes = async () => {
    const apiResponse = await fetch(
        "http://ebreak.ru/Themes.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        return data.themes
    }
    return null
}

export const getAllTasks = async () => {
    const apiResponse = await fetch(
        "http://ebreak.ru/Tasks.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        return data.tasks
    }
    return null
}

export const getAllDictionaries = async () => {
    const apiResponse = await fetch(
        "http://ebreak.ru/Dictionaries.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        return data.dicktionaries
    }
    return null
}

export const getDictById = async (id: number) => {
    const apiResponse = await fetch(
        "http://ebreak.ru/Dictionaries.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();

        return data.dicktionaries.find((item) => item.id === id)
    }
    return null
}

export const getTaskById = async (id: number) => {
    const apiResponse = await fetch(
        "http://ebreak.ru/Tasks.json"
    );
    if (apiResponse.ok) {
        const data = await apiResponse.json();

        return data.dicktionaries.find((item) => item.id === id)
    }
    return null
}
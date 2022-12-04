export const saveLocalStorage = (content: string) => {
    localStorage.setItem("token", JSON.stringify(content));
}

export const getLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "{}");
}
export const saveLocalStorage = (key: string, content: string) => {
    console.log(content);
    localStorage.setItem(key, JSON.stringify(content));
}

export const getLocalStorage = (key: string, spec?: string) => {
    let response = JSON.parse(localStorage.getItem(key) || "{}");

    switch (spec) {
        case "token":
            return response.token;

        case "role":
            return response.role[0].roleId

        default: return response;
    }
}
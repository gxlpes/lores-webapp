export const saveLocalStorage = (content: string) => {
    localStorage.setItem("auth", JSON.stringify(content));
}

export const getLocalStorage = (key: string) => {
    let response = JSON.parse(localStorage.getItem("auth") || "{}");
    console.log(response);

    switch (key) {
        case "token":
            return response.token;

        case "role":
            return response.role[0].roleId
    }
}
import axios from "axios";
import { BASE_URL } from "../common/constants";
import { getLocalStorage } from "../common/localStorage";

export const axiosPublic = axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Credentials": "true" },
    withCredentials: true
})

axiosPrivate.interceptors.request.use(async (config) => {
    config.headers!.Authorization = `Bearer ${getLocalStorage("auth", "token")}`
    return config
})


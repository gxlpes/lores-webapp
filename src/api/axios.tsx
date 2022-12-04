import axios from "axios";
import { BASE_URL } from "../common/constants";
import useAuth from "../hooks/useAuth";

export const api = axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Credentials": "true" },
    withCredentials: true
})

axiosPrivate.interceptors.request.use(async (config) => {
    const token = await JSON.parse(localStorage.getItem("data") || '{}')

    console.log("dataaaaa", token);


    config.headers!.Authorization = `Bearer ${token}`
    return config
})


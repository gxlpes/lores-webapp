import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const { auth } = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use((config) => {
            config.headers!.Authorization = `Bearer ${auth.token}`
            return config
        })

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    prevRequest.headers['Authorization'] = `Bearer ${auth.token}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }

    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;

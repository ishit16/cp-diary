import { useRecoilState } from "recoil";
import { useAuthState } from "../api/signState";
import { useRefreshToken } from "./useRefreshToken"
import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";

export const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const [auth, setAuth] = useRecoilState(useAuthState);

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            //@ts-ignore
            config => {
                if(!config.headers['Authorization']){
                    //@ts-ignore
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (err) => Promise.reject(err)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (err) => {
                const prevRequest = err?.config;
                if(err?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(err)
            }
        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])
    return axiosPrivate;
}


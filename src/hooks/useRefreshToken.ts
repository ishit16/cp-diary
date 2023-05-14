import { useRecoilState } from "recoil";
import axios from "../api/axios";
import { useAuthState, useSignState } from "../api/signState";

export const useRefreshToken = () => {
    const [auth, setAuth] = useRecoilState(useAuthState)

    const refresh = async() => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            return {...prev, accessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    }
    return refresh;
}

import { useRecoilState } from "recoil";
import axios from "../api/axios";
import { useAuthState, useSignState } from "../api/signState";

export const useRefreshToken = () => {
    const [auth, setAuth] = useRecoilState(useAuthState)

    const refresh = async() => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        console.log(response.data)
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {...prev, accessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    }
    return refresh;
}

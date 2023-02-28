import { useRecoilState } from "recoil"
import axios from "../api/axios";
import { useAuthState } from "../api/signState"

export const useLogout = () => {
    const [auth, setAuth] = useRecoilState(useAuthState);
    const logout = async() =>  {
        setAuth({});
        try{
            const response = await axios('/logout', {
                withCredentials: true
            })
        }catch(err) {
            console.log(err);
        }
    }
    return logout;
}
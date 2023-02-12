import axios from "axios"
import { useRecoilState } from "recoil"
import { MaxRating, TotalSubmissions } from "../atoms/UserInfoAtom"

export const getUserInfo = async () => {
    const [userInfo, setUserInfo] = useRecoilState(MaxRating);
    
    try {
      const response = await axios.get(
        "https://codeforces.com/api/user.info?handles=ishitgarg1231"
      );
      console.log(response.data);
      setUserInfo(response.data.result[0].maxRating);
    } catch (error) {
      console.log(error);
    }
};

export const getUserSubmissions = async () => {
    const [userSubmissions, setUserSubmissions] = useRecoilState(TotalSubmissions);

    try {
        const response = await axios.get(
            "https://codeforces.com/api/user.status?handle=Fefer_Ivan"
        );
        setUserSubmissions(response.data.result.length);
    } catch (error) {
        console.log(error)
    }
}
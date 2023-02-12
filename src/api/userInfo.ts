import axios from "axios"
import { useRecoilState } from "recoil"
import { UserInformation } from "../atoms/UserInfoAtom"

export const getUserInfo = async () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInformation);
    try {
      const response = await axios.get(
        "https://codeforces.com/api/user.info?handles=ishitgarg1231"
      );
      setUserInfo(response.data.result[0].maxRating);
    } catch (error) {
      console.log(error);
    }
};
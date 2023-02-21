import axios from "axios"
import { useRecoilState } from "recoil"
import { MaxRating, TotalSubmissions, UserAvatar, UserHandle } from "../atoms/UserInfoAtom"

export const getUserInfo = async () => {
    const [userInfo, setUserInfo] = useRecoilState(MaxRating);
    const [userAvatar, setUserAvatar] = useRecoilState(UserAvatar);
    const [userHandle, setUserHandle] = useRecoilState(UserHandle);

    try {
      const response = await axios.get(
        "https://codeforces.com/api/user.info?handles=ishitgarg1231"
      );
      console.log(response.data);
      setUserHandle(response.data.result[0].handle);
      setUserAvatar(response.data.result[0].avatar);
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
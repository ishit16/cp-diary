import axios from "axios";
import {atom, selector} from "recoil";

export const userHandleState = atom<string | undefined>({
    key: "UserHandle",
    default: undefined
})

export const userMaxRating = selector({
    key: "userRating",
    //@ts-ignore
    get: async ({get}) => {
        const userHandle = get(userHandleState)
        if(userHandle === undefined) return

        const userRating = await axios.get(
            `https://codeforces.com/api/user.rating?handle=${userHandle}`
        )
        return userRating.data.result[userRating.data.result.length-1].newRating;
    }
})

export const userAvatar = selector({
    key: "userAvatar",
    // @ts-ignore
    get: async ({get}) => {
        const userHandle = get(userHandleState)
        if(userHandle === undefined) return
        const userAvatar = await axios.get(
            `https://codeforces.com/api/user.info?handles=${userHandle}`
        )
        return userAvatar.data.result[0].avatar;
    }
})
import axios from "axios";
import {atom, selector} from "recoil";
import { getQuestionsMap } from "./utils/getQuestionMap";
 
// @ts-ignore
export const userHandleState = atom<string | undefined>({
    key: "UserHandle",
    default: undefined,
    effects_UNSTABLE:[
        ({onSet, setSelf}) => {
            const storedHandle = localStorage.getItem("handle");
            if(storedHandle != null){
                setSelf(JSON.parse(storedHandle));
            }
            onSet((newHandle) => {
                localStorage.setItem("handle", JSON.stringify(newHandle))
            })
        },
    ],
});
// @ts-ignore

export const userMaxRating = selector({
    key: "userRating",
    //@ts-ignore
    get: async ({get}) => {
        // @ts-ignore

        const userHandle = get(userHandleState)
        if(userHandle === undefined) return
        // @ts-ignore

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

export const userSubmissions = selector({
    key: "userSubmissions",
    get: async({get}) => {
        const userHandle = get(userHandleState);
        if(userHandle === undefined) return;
        const userSubmissionsResponse = await axios.get(
            `https://codeforces.com/api/user.status?handle=${userHandle}`
        )
        getQuestionsMap(userSubmissionsResponse.data)
        return userSubmissionsResponse.data;
    }
})
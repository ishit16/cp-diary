import { atom } from "recoil";

export const useSignState = atom({
    key: "useSignState",
    default: false
})

export const useAuthState = atom({
    key: "useAuthState",
    default: {}
})
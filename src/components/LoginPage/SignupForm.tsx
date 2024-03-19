import axios from "../../api/axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useSignState } from "../../api/signState";
import {
  invalidPassword,
  accountCreated,
  serverResponseError,
  userNameTaken,
} from "../toasters/toasts";
import toast from "react-hot-toast";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

export const SignupForm = () => {
  const [isSignup, setIsSignup] = useRecoilState(useSignState);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      invalidPassword();
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await toast.promise(
        axios.post(REGISTER_URL, JSON.stringify({ user, pwd }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }),
        {
          loading: "Creating New Account",
          error: "Error Occured",
          success: (response) => {
            setSuccess(true);
            accountCreated();
            setUser("");
            setPwd("");
            setMatchPwd("");
            return "Account Created Successfully!";
          },
        }
      );
    } catch (err) {
      //@ts-ignore
      if (!err?.response) {
        serverResponseError();
        setErrMsg("No Server Response");
        // @ts-ignore
      } else if (err.response?.status === 409) {
        userNameTaken();
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      //@ts-ignore
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <input
            id="username"
            type="text"
            className="form-control w-3/4 px-4 py-4 text-slate-50 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-md focus:text-gray-50 focus:outline-none"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <input
            id="password"
            type="password"
            className="form-control w-3/4 px-4 py-4 text-slate-50 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <input
            type="password"
            className="form-control w-3/4 px-4 py-4 text-slate-50 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
            placeholder="Confirm Password"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
          />
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <button
            disabled={!validName || !validMatch ? true : false}
            className="bg-[#EF087A] w-fit font-roboto md:text-lg px-8 py-2 mt-8 text-white font-bold rounded-xl"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
};

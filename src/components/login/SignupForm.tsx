import axios from "../../api/axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useSignState } from "../../api/signState";
import {
  accountCreated,
  invalidPassword,
  serverResponseError,
  userNameTaken,
} from "../toasters/toasts";

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
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      accountCreated();
      setUser("");
      setPwd("");
      setMatchPwd("");
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
        <div className="mb-6">
          <input
            id="username"
            type="text"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <input
            id="password"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div className="mb-6">
          <input
            id="confirm_pwd"
            type="password"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <button
          className="inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          disabled={!validName || !validPwd || !validMatch ? true : false}
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="my-2 inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        >
          Login
        </button>
      </form>
    </>
  );
};

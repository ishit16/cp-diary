import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useAuthState, useSignState } from "../../api/signState";
import { userHandleState } from "../../api/UserInfo";
import axios from "../../api/axios";
import { useState } from "react";
import toast from "react-hot-toast";

const LOGIN_URL = "/auth";

export const LoginForm = () => {
  const [auth, setAuth] = useRecoilState(useAuthState);
  const [userCPHandle, setUserCPHandle] = useRecoilState(userHandleState);
  const [isSignup, setIsSignup] = useRecoilState(useSignState);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const successNotify = () => toast.success("Login Successful!");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      successNotify();
      navigate("/dashboard");
    } catch (err: any) {
      if (!err?.response) {
        console.log("No server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  return (
    <>
      {/* <div className="md:w-8/12 lg:w-5/12 lg:ml-20"> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            id="email"
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </div>

        <div className="mb-6">
          <input
            id="password"
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>
        <div className="mb-6">
          <input
            id="cpHandle"
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Codeforces Handle"
            onChange={(event) => {
              setUserCPHandle(event.target.value);
              localStorage.setItem("handle", event.target.value);
            }}
          />
        </div>

        <div className="flex justify-center items-center mb-6">
          <a
            href="#!"
            className="text-white hover:text-white focus:text-white active:text-white font-bold duration-200 transition ease-in-out"
          >
            Forgot password?
          </a>
        </div>

        <button className="inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
          Sign in
        </button>

        <button
          onClick={() => {
            setIsSignup(!isSignup);
          }}
          className=" my-2 inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        >
          Register
        </button>
      </form>
      {/* </div> */}
    </>
  );
};

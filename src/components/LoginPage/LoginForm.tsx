import { useState } from "react";
import axios from "../../api/axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userHandleState } from "../../api/UserInfo";
import { useAuthState, useSignState } from "../../api/signState";
import { userNameAtom } from "../../api/userAtom";

export const LoginForm = () => {
  const [auth, setAuth] = useRecoilState(useAuthState);
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [userCPHandle, setUserCPHandle] = useRecoilState(userHandleState);
  const [isSignup, setIsSignup] = useRecoilState(useSignState);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await toast.promise(
        axios.post("/auth", JSON.stringify({ user, pwd }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }),
        {
          loading: "Loading",
          success: (response) => {
            const data = response.data.accessToken;
            setAuth({ user, data });
            setUserName(user);
            setPwd("");
            navigate("/dashboard");
            return "Logged In";
          },
          error: (err) => {
            if (err?.response?.status === 401) {
              return "Invalid Credentials";
            } else if (err?.response?.status === 400) {
              return "Missing Credentials";
            } else {
              return "Server Error";
            }
          },
        }
      );
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <input
            id="email"
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
            id="cpHandle"
            type="text"
            className="form-control w-3/4 px-4 py-4 text-slate-50 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
            placeholder="Codeforces Handle"
            onChange={(event) => {
              setUserCPHandle(event.target.value);
              localStorage.setItem("handle", event.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <button className="bg-[#EF087A] w-fit font-roboto md:text-lg px-8 py-2 mt-8 text-white font-bold rounded-xl">
            Login
          </button>
          <span className="md:text-xl font-ubuntu text-blue-300 mt-8">
            Forgot Password
          </span>
        </div>
      </form>
    </>
  );
};

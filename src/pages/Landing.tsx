import "././customcss/landing.css";
import image from "../assets/human-coding.png";
import peepsImage from "../assets/peep-crowd.svg";
import { LoginForm } from "../components/login/LoginForm";
import titleImage from "../assets/codeforces-diary.svg";
import { SignupForm } from "../components/login/SignupForm";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useSignState } from "../api/signState";
export const LandingPage = () => {
  const isSignup = useRecoilValue(useSignState);

  return (
    <>
      <div className="h-screen background-image">
        <div className="flex flex-col justify-between place-content-center">
          <img src={titleImage} className=" top-0 mt-0 h-20"></img>

          <div className="flex flex-col items-center">
            <div className="w-3/4 lg:w-1/4 p-9 bg-slate-900 bg-opacity-75 rounded-xl">
              {isSignup ? <SignupForm /> : <LoginForm />}
            </div>
          </div>
          <div className="">
            <img src={peepsImage} className="w-screen h-24 md:h-48"></img>
          </div>
        </div>
      </div>
    </>
  );
};

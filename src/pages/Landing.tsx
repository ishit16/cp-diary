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
      <div className="h-screen background-image w-screen overflow-x-hidden">
        <div className="flex flex-col justify-between place-content-center">
          <div className="w-screen">
            <img src={titleImage} className="w-screen lg:h-1/2"></img>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="w-3/4 lg:w-1/4 p-10 bg-slate-900 bg-opacity-75 rounded-xl">
                {isSignup ? <SignupForm /> : <LoginForm />}
              </div>
            </div>
          </div>
          <div className="w-screen">
            <img src={peepsImage} className="w-screen"></img>
          </div>
        </div>
      </div>
    </>
  );
};

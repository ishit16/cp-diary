import { useState, useEffect } from "react";
import useDevice from "../../hooks/useDevice";
import { Footer } from "../Shared/Footer";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export const LoginPageContainer = () => {
  const device = useDevice();
  const [createAccount, setCreateAccount] = useState(false);
  const handleCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  const helperPoints = [
    { index: 1, point: "Analyzing Your CP Profile" },
    { index: 2, point: "Saving problems from Leetcode/Codeforces" },
    { index: 3, point: "Adding notes to revisit and revise problems Later" },
    { index: 4, point: "Connecting with your friends and sharing problems" },
  ];
  const [showPoints, setShowPoints] = useState(false);
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (showPoints) {
        if (
          currentLetterIndex === helperPoints[currentPointIndex].point.length
        ) {
          setTimeout(() => {
            setCurrentLetterIndex(0);
            setShowPoints(false);
          }, 1000); // Delay before erasing the point (in milliseconds)
        } else {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        setCurrentPointIndex(
          (prevIndex) => (prevIndex + 1) % helperPoints.length
        );
        setTimeout(() => {
          setShowPoints(true);
        }, 500); // Delay before showing the next point (in milliseconds)
      }
    }, 100); // Delay between typing each letter (in milliseconds)

    return () => clearInterval(typingInterval);
  }, [showPoints, currentLetterIndex, currentPointIndex, helperPoints]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="bg-slate-900 shadow-md h-20 flex flex-row items-center justify-center">
          <span className="text-white font-roboto font-bold text-lg md:text-2xl">
            CP Diary
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="md:pt-12 flex flex-col mx-auto">
            <span className="text-2xl md:text-3xl font-ubuntu font-bold text-gray-400 py-3 md:py-4">
              DSA Buddy
            </span>
            <span className="font-ubuntu text-4xl md:text-6xl font-bold text-[#8CCBEF]">
              Login to CP-Diary
            </span>
            {!createAccount ? (
              <span
                onClick={handleCreateAccount}
                className="font-ubuntu md:text-xl text-blue-300 py-3 md:py-6"
              >
                Create new Account
              </span>
            ) : (
              <span
                onClick={handleCreateAccount}
                className="font-ubuntu md:text-xl text-blue-300 py-3 md:py-6"
              >
                Login with existing account
              </span>
            )}
            {createAccount ? <SignupForm /> : <LoginForm />}
          </div>
          {!device.isPhone && (
            <div className="flex flex-col pt-12 pr-20">
              <span className="text-[#8CCBEF] font-bold font-ubuntu text-6xl">
                CP-Diary can help you
              </span>
              <span className="text-[#8CCBEF] font-bold font-ubuntu text-6xl">
                with:
              </span>
              <div className="py-8">
                <div className="py-4 w-80 break-words text-[#A0E55C] text-4xl font-courierPrime font-bold">
                  {helperPoints[currentPointIndex].point.substring(
                    0,
                    currentLetterIndex + 1
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

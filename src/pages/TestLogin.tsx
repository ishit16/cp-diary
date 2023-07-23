import { useState, useEffect } from "react";
import useDevice from "../hooks/useDevice";

export const TestLoginPage = () => {
  const device = useDevice();

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
          <div className="md:pt-20 flex flex-col pl-24">
            <span className="text-xl md:text-3xl font-ubuntu font-bold text-gray-400 py-3 md:py-4">
              DSA Buddy
            </span>
            <span className="font-ubuntu text-3xl md:text-6xl font-bold text-[#8CCBEF]">
              Login to CP-Diary
            </span>
            <span className="font-ubuntu md:text-xl text-blue-300 py-3 md:py-6">
              Create new Account
            </span>
            <form>
              <div className="flex flex-col gap-y-4">
                <input
                  type="text"
                  className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-md focus:text-gray-50 focus:outline-none"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="form-control w-3/4 px-4 py-4 text-slate-900 font-roboto font-semibold bg-slate-800 shadow-2xl rounded-lg focus:text-gray-50 focus:outline-none"
                  placeholder="Codeforces Handle"
                />
              </div>
            </form>
            <div className="flex flex-row gap-x-4 items-center">
              <button className="bg-[#EF087A] w-fit font-roboto md:text-lg px-8 py-2 mt-8 text-white font-bold rounded-xl">
                Login
              </button>
              <span className="md:text-xl font-ubuntu text-blue-300 mt-8">
                Forgot Password?
              </span>
            </div>
          </div>
          {!device.isPhone && (
            <div className="flex flex-col pt-20 pr-20">
              <span className="text-[#8CCBEF] font-bold font-ubuntu text-6xl">
                CP-Diary can help you
              </span>
              <span className="text-[#8CCBEF] font-bold font-ubuntu text-6xl">
                with:
              </span>
              <div className="py-8">
                <div className="py-4 w-80 break-words text-gray-300 text-4xl font-mono font-bold">
                  {helperPoints[currentPointIndex].point.substring(
                    0,
                    currentLetterIndex + 1
                  )}
                  {/* Conditionally render the tick icon */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="h-20 bg-slate-900 mb-0 bottom-0 fixed w-full shadow-md">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <span className="text-white font-roboto font-bold md:text-lg pt-2">
                Developed with ❤️
              </span>
              <span className="text-white font-roboto font-bold md:text-lg">
                Ishit Garg
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

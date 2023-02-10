import "././customcss/landing.css";
import image from "../assets/human-coding.png";
import peepsImage from "../assets/peep-crowd.svg";
import { LoginForm } from "../components/login/LoginForm";
import titleImage from "../assets/codeforces-diary.svg";
export const LandingPage = () => {
  return (
    <>
      <div className="bg-purple-landing-page h-screen">
        <div className="grid grid-cols-2">
          <div
            className="h-screen flex flex-col justify-between background-image"
            style={{ width: "90vh" }}
          >
            <img style={{ width: "90vh" }} src={titleImage}></img>
            <img style={{ width: "90vh" }} src={image}></img>
            <img style={{ width: "90vh" }} src={peepsImage}></img>
          </div>
          <div className="h-screen grid place-items-center">
            <div className="h-3/4 w-11/12 bg-slate-500 bg-opacity-25 rounded-xl">
              <div className="text-center mx-auto">
                <p className="text-white py-16  font-bold text-4xl">
                  Login Form
                </p>
              </div>
              <div className="w-1/2 h-1/2 mx-auto">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

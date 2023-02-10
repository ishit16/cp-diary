import "././customcss/landing.css";
import image from "../assets/computer.png";
import { LoginForm } from "../components/login/LoginForm";
export const LandingPage = () => {
  return (
    <>
      <div className="bg-purple-landing-page h-screen">
        <div className="grid grid-flow-col auto-cols-auto">
          <div className="h-screen grid content-center background-image"></div>
          <div className="h-screen grid place-items-center">
            <div className="h-3/4 w-3/4 bg-slate-500 bg-opacity-25 rounded-xl">
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

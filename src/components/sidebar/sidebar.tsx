import { useState } from "react";
import cursorImage from "../../assets/control.png";
import logoImage from "../../assets/logo.png";

export const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div>
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 h-screen p-5 pt-8 bg-navbar-dashboard-color relative`}
        >
          <img
            src={cursorImage}
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-navbar-dashboard-color ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img src={logoImage} className={`cursor-pointer duration-500`} />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300`}
            >
              CP Diary
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

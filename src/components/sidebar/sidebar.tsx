import { useState } from "react";
import cursorImage from "../../assets/control.png";
import logoImage from "../../assets/logo.png";

export const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", gap: true },
    { title: "Diary", src: "Folder", gap: true },
    { title: "Settings", src: "Setting", gap: true },
  ];
  return (
    <>
      <div className="flex z-8">
        <div
          className={`${
            open ? "md:w-72 w-48" : "w-20"
          } duration-300 h-full p-5 pt-20 bg-slate-900 relative`}
        >
          <img
            src={cursorImage}
            className={`absolute cursor-pointer rounded-full -right-3 top-20 w-7 border-2 border-navbar-dashboard-color ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logoImage}
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              CP Diary
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-lite-white rounded-md ${
                  menu.gap ? "mt-9" : "mt-2"
                }`}
              >
                <img src={`./src/assets/${menu.src}.png`}></img>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-lg font-bold`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

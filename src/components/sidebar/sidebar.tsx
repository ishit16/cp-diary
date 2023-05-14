import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import cursorImage from "../../assets/control.png";
import logoImage from "../../assets/logo.png";
import useDevice from "../../hooks/useDevice";
import chartFill from "../../assets/Chart_fill.png";
import folder from "../../assets/Folder.png";
import { SideBarAsyncData } from "./sidebarAsyncData";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const deviceSize: any = useDevice();
  const isPhone: boolean = deviceSize.isPhone;

  const Menus = [
    { title: "Dashboard", src: chartFill, gap: true, redir: "/dashboard" },
    { title: "Diary", src: folder, gap: true, redir: "/diary" },
  ];

  return (
    <>
      <div className="flex z-8 min-h-screen">
        <div
          className={`${
            open ? "md:w-72 w-48" : "w-20"
          } duration-300 h-full p-5 pt-20 bg-slate-900 relative`}
        >
          {!isPhone ? (
            <img
              src={cursorImage}
              className={`absolute cursor-pointer rounded-full -right-3 top-20 w-7 border-2 border-navbar-dashboard-color ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <div />
          )}
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
          <hr
            className={`w-full mt-4 border-gray-800 ${!open && "hidden"}`}
          ></hr>
          <ul className="pt-4">
            {Menus.map((menu, index) => (
              <Link to={menu.redir}>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-lite-white rounded-md ${
                    menu.gap ? "mt-9" : "mt-2"
                  }`}
                >
                  <img src={`${menu.src}`}></img>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-bold`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <hr
            className={`w-full mt-4 border-gray-800 ${!open && "hidden"}`}
          ></hr>
          <Suspense fallback={<div>loading...</div>}>
            <SideBarAsyncData open={open} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

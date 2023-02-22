import { useState } from "react";
import { useRecoilValue } from "recoil";
// import { getUserInfo } from "../../api/userInfo";
import cursorImage from "../../assets/control.png";
import logoImage from "../../assets/logo.png";
import { userAvatar, userHandleState, userMaxRating } from "../../api/UserInfo";
// import { MaxRating, UserAvatar, UserHandle } from "../../atoms/UserInfoAtom";
import useDevice from "../../hooks/useDevice";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  // const avatar: any = getUserInfo();
  const userAvatarPicture = useRecoilValue(userAvatar);
  const userHandle = useRecoilValue(userHandleState);
  const userRating = useRecoilValue(userMaxRating);
  const deviceSize: any = useDevice();
  const isPhone: boolean = deviceSize.isPhone;

  const Menus = [
    { title: "Dashboard", src: "Chart_fill", gap: true },
    { title: "Diary", src: "Folder", gap: true },
  ];

  return (
    <>
      <div className="flex z-8">
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
          <hr
            className={`w-full mt-4 border-gray-800 ${!open && "hidden"}`}
          ></hr>
          <img
            src={userAvatarPicture}
            className={`mx-auto mt-16 ${
              !open ? "w-12 h-12 rounded-full" : "w-24 h-24 rounded-full"
            }`}
          ></img>
          <div className="flex flex-col items-center">
            <span
              className={`font-bold text-white text-xl mx-auto mt-4 ${
                !open && "hidden"
              }`}
            >
              {userHandle}
            </span>
            <span
              className={`font-bold text-white text-6xl mt-8 ${
                !open && "hidden"
              }`}
            >
              {userRating}
            </span>
            <hr
              className={`w-full mt-4 border-gray-800 ${!open && "hidden"}`}
            ></hr>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

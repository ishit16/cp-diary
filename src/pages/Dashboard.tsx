import { useEffect, useState } from "react";

import { DashboardNavbar } from "../components/navbar/Navbar";
import axios, { AxiosResponse } from "axios";
import { useRecoilState } from "recoil";
import { UserInformation } from "../atoms/UserInfoAtom";
import { getUserInfo } from "../api/userInfo";

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserInformation);

  const result = getUserInfo();

  return (
    <>
      <div className="bg-purple-landing-page h-screen">
        <DashboardNavbar></DashboardNavbar>
        <div>
          <p className="text-3xl text-white">{userInfo}</p>
        </div>
      </div>
    </>
  );
};

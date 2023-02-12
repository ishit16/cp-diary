import { useEffect, useState } from "react";

import { DashboardNavbar } from "../components/navbar/Navbar";
import axios, { AxiosResponse } from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { MaxRating, TotalSubmissions } from "../atoms/UserInfoAtom";
import { getUserInfo, getUserSubmissions } from "../api/userInfo";
import { Heatmap } from "../components/Dashboard/heatmap/heatmap";

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useRecoilState(MaxRating);
  const userSubmissions = useRecoilValue(TotalSubmissions);
  // const result = getUserInfo();
  const submissions: any = getUserSubmissions();

  return (
    <>
      <div className="bg-purple-landing-page h-screen">
        <DashboardNavbar></DashboardNavbar>
        <div className="px-4 mt-4">
          <Heatmap submissions={userSubmissions} />
        </div>
      </div>
    </>
  );
};

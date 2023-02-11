import { useEffect, useState } from "react";

import { DashboardNavbar } from "../components/navbar/Navbar";
import axios, { AxiosResponse } from "axios";

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useState("");

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        "https://codeforces.com/api/user.info?handles=ishitgarg1231"
      );
      setUserInfo(response.data.result[0].maxRating);
    } catch (error) {
      console.log(error);
    }
  };

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

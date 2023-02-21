import { DashboardNavbar } from "../components/navbar/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { MaxRating, TotalSubmissions, UserAvatar } from "../atoms/UserInfoAtom";
import { getUserInfo, getUserSubmissions } from "../api/userInfo";
import { SideBar } from "../components/sidebar/sidebar";
import Select from "react-select";

export const Dashboard = () => {
  const submissions: any = getUserSubmissions();
  const userSubmissions = useRecoilValue(TotalSubmissions);

  const options = [
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
  ];
  return (
    <>
      <div className="bg-purple-landing-page">
        <DashboardNavbar></DashboardNavbar>
        <div className="flex h-screen">
          <SideBar />
          <div className="px-4 pt-16 md:pt-20 w-screen">
            <div className="bg-slate-800 flex h-auto justify-between flex-row py-8 px-4 bg-opacity-50">
              <div>
                <p className="text-white font-bold  md:text-2xl">
                  Total Submissions: {userSubmissions}
                </p>
              </div>
              <div>
                <Select
                  options={options}
                  defaultValue={options[options.length - 1]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

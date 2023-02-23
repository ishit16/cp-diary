import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";
import { StatsBox } from "../components/Dashboard/statsBox/statsBox";
import { Suspense } from "react";
import LoadingBar from "react-top-loading-bar";

export const Dashboard = () => {
  return (
    <>
      <div className="bg-purple-landing-page">
        <DashboardNavbar></DashboardNavbar>
        <div className="flex h-screen">
          <SideBar />
          <div className="px-4 pt-16 md:pt-20 w-screen">
            <div className="bg-slate-800 h-auto py-8 px-4 bg-opacity-50 flex flex-col">
              <Suspense fallback={<LoadingBar color="red" />}>
                <StatsBox />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";
import { StatsBox } from "../components/Dashboard/statsBox/statsBox";
import { Suspense } from "react";
import { Loading } from "react-loading-dot/lib";

export const Dashboard = () => {
  return (
    <>
      <div className="bg-purple-landing-page">
        <DashboardNavbar></DashboardNavbar>
        <div className="flex h-screen">
          <SideBar />
          <div className="px-4 pt-16 md:pt-20 w-screen">
            <Suspense fallback={<Loading />}>
              <StatsBox />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

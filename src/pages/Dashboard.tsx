import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";
import { StatsBox } from "../components/Dashboard/statsBox/statsBox";
import { Suspense } from "react";
import { Loading } from "react-loading-dot/lib";

export const Dashboard = () => {
  return (
    <>
      <div className="bg-purple-landing-page bg-repeat">
        <DashboardNavbar></DashboardNavbar>
        <div className="flex md:h-screen h-max">
          <SideBar />
          <div className="px-4 md:pt-20 w-screen">
            <Suspense fallback={<Loading />}>
              <StatsBox />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

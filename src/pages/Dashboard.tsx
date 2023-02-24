import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";
import { StatsBox } from "../components/Dashboard/statsBox/statsBox";
import { Suspense } from "react";
import { Loading } from "react-loading-dot/lib";
import { Heatmap } from "../components/Dashboard/heatmap/heatmap";

export const Dashboard = () => {
  const options = [
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
  ];

  return (
    <>
      <div className="bg-purple-landing-page bg-repeat flex-col min-h-screen h-full">
        <DashboardNavbar></DashboardNavbar>
        <div className="flex ">
          <SideBar />
          <div className="px-4 md:pt-20 w-screen">
            <div className="flex-col">
              <Suspense fallback={<Loading />}>
                <StatsBox />
              </Suspense>
              <div className="rounded-md bg-slate-800 bg-opacity-50 py-4 px-4 my-4">
                <Suspense fallback={<Loading />}>
                  <Heatmap />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

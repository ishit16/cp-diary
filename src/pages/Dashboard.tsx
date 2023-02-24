import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";
import { StatsBox } from "../components/Dashboard/statsBox/statsBox";
import { Suspense } from "react";
import { Loading } from "react-loading-dot/lib";
import Select from "react-select";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

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
              <div className=" bg-slate-800 bg-opacity-50 py-4 px-4 my-4">
                <div className="flex-col">
                  <div className="flex flex-row justify-between">
                    <p className="text-white text-2xl font-bold">Heatmap</p>
                    <div>
                      <Select
                        options={options}
                        // @ts-ignore
                        defaultValue={options[options.length - 1]}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <CalendarHeatmap
                        startDate={new Date("2016-01-01")}
                        endDate={new Date("2017-01-01")}
                        values={[
                          { date: "2016-01-01", count: 12 },
                          { date: "2016-01-22", count: 122 },
                          { date: "2016-01-30", count: 38 },
                          // ...and so on
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

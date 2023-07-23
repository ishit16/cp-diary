import { Suspense } from "react";
import { Loading } from "react-loading-dot";
import { Heatmap } from "../heatmap/heatmap";
import { StatsBox } from "../statsBox/statsBox";
import { cva } from "class-variance-authority";

export const DashboardContainer = () => {
  return (
    <>
      <div className={MainContent()}>
        <div className={StatsBoxStyles()}>
          <Suspense fallback={<Loading />}>
            <StatsBox />
          </Suspense>
          <div className={HeatmapStyles()}>
            <Suspense fallback={<Loading />}>
              <Heatmap />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

const MainContent = cva(["px-4", "md:pt-20", "w-screen"]);
const StatsBoxStyles = cva(["flex-col"]);
const HeatmapStyles = cva([
  "border-solid",
  "border-sky-500",
  "border-2",
  "rounded-md",
  "bg-slate-800",
  "bg-opacity-50",
  "p-4",
  "my-4",
]);

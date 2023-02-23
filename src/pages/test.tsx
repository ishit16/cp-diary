import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export const Test = () => {
  return (
    <>
      <div className="bg-slate-900 h-screen">
        <div className="w-1/2 items-center flex-row justify-center mx-auto">
          <CalendarHeatmap
            startDate={new Date("2016-01-01")}
            endDate={new Date("2017-01-01")}
            width={500}
            height={500}
            values={[
              { date: "2016-01-01", count: 12 },
              { date: "2016-01-22", count: 122 },
              { date: "2016-01-30", count: 38 },
              // ...and so on
            ]}
          />
        </div>
      </div>
    </>
  );
};

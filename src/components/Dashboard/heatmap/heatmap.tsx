import Select from "react-select";
import HeatMap from "@uiw/react-heat-map";
const options = [
  { value: 2021, label: "2021" },
  { value: 2022, label: "2022" },
  { value: 2023, label: "2023" },
];

export const Heatmap = (props: any) => {
  return (
    <>
      <div className="bg-slate-800 flex flex-row justify-between w-auto bg-opacity-50 shadow-md px-3 py-4">
        <div>
          <p className="text-white font-bold text-2xl">
            Total Number of Submissions: {props.submissions}
          </p>
        </div>
        <div>
          <div>
            <Select
              options={options}
              defaultValue={options[options.length - 1]}
            />
          </div>
          <HeatMap />
        </div>
      </div>
    </>
  );
};

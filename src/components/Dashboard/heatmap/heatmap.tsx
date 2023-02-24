import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { userSubmissions } from "../../../api/UserInfo";
import { getDate } from "../../../api/utils/getDate";

const prepareData = (SubmissionsList: any) => {
  const LastSubmissionYear = getDate(
    SubmissionsList.result[0].creationTimeSeconds
  ).getFullYear();
  const FirstSubmissionYear = getDate(
    SubmissionsList.result[SubmissionsList.result.length - 1]
      .creationTimeSeconds
  ).getFullYear();

  let yearList: any = [];
  for (let idx = FirstSubmissionYear; idx <= LastSubmissionYear; idx++) {
    yearList.push({ value: idx, label: idx.toString() });
  }

  let QuestionMap = new Map<string, number>();
  SubmissionsList.result.forEach((attempt: any) => {
    const date = getDate(attempt.creationTimeSeconds);
    /// year: month: dd format
    const dateKey = date.toISOString().slice(0, 10);
    // @ts-ignore
    QuestionMap.set(
      dateKey,
      // @ts-ignore
      QuestionMap.get(dateKey) == undefined ? 1 : QuestionMap.get(dateKey) + 1
    );
  });

  return { QuestionMap, yearList };
};

const getYearDate = (year: number): any => {
  const dateObject = {
    startDate: new Date(year, 0, 0),
    endDate: new Date(year, 11, 31),
  };
  return dateObject;
};

export const Heatmap = () => {
  const SubmissionsList = useRecoilValue(userSubmissions);
  const yearList = prepareData(SubmissionsList).yearList;
  const QuestionMap = prepareData(SubmissionsList).QuestionMap;
  const [year, setYear] = useState(yearList[yearList.length - 1].value);
  const Dates = getYearDate(year);
  const QuestionYearList: any = [];
  for (let [x, value] of QuestionMap.entries()) {
    QuestionYearList.push({
      date: x,
      count: value,
    });
  }

  console.log(QuestionYearList);

  return (
    <div className="flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-white text-2xl font-bold">Heatmap</p>
        <div>
          <Select
            // @ts-ignore
            options={yearList}
            // @ts-ignore
            defaultValue={yearList[yearList.length - 1]}
            onChange={(options) => setYear(options!.value)}
          />
        </div>
      </div>
      <div className="py-12">
        <CalendarHeatmap
          startDate={Dates.startDate}
          endDate={Dates.endDate}
          values={QuestionYearList}
        />
      </div>
    </div>
  );
};

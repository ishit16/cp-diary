import { DashboardNavbar } from "../components/navbar/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
// import { MaxRating, TotalSubmissions, UserAvatar } from "../atoms/UserInfoAtom";
// import { getUserInfo } from "../api/userInfo";
import { SideBar } from "../components/sidebar/sidebar";
import Select from "react-select";
import { VictoryPie } from "victory";
import { QuestionsRatingChart } from "../components/Dashboard/pieCharts/piechart";
import { userSubmissions } from "../api/UserInfo";
import { ContestStatsCard } from "../components/Dashboard/contestStats/contestStats";
import { getQuestionsMap } from "../api/utils/getQuestionMap";
import { getPieData } from "../api/utils/getPieData";

export const Dashboard = () => {
  const userQuestionMap = useRecoilValue(userSubmissions);
  const totalSubmissions = userQuestionMap.result.length;

  const correctSubmissionsMap: Map<string, number> =
    getQuestionsMap(userQuestionMap).taggedCorrectSubmissionsNumbers;
  let sumCorrectSubmissions = 0;
  correctSubmissionsMap.forEach((v) => {
    sumCorrectSubmissions += v;
  });

  const wrongSubmissionsMap: Map<string, number> =
    getQuestionsMap(userQuestionMap).taggedWrongSubmissionNumbers;
  let sumIncorrectSubmissions = 0;
  wrongSubmissionsMap.forEach((v) => {
    sumIncorrectSubmissions += v;
  });

  const WADATA = getPieData(wrongSubmissionsMap, sumIncorrectSubmissions);
  const ACData = getPieData(correctSubmissionsMap, sumCorrectSubmissions);

  return (
    <>
      <div className="bg-purple-landing-page">
        <DashboardNavbar></DashboardNavbar>
        <div className="flex h-screen">
          <SideBar />
          <div className="px-4 pt-16 md:pt-20 w-screen">
            <div className="bg-slate-800 h-auto py-8 px-4 bg-opacity-50 flex flex-col">
              <div className="flex flex-row justify-center">
                <div>
                  <p className="text-white font-bold  md:text-3xl">
                    Total Submissions: {totalSubmissions}
                  </p>
                </div>
                {/* <div>
                  <Select
                    options={options}
                    defaultValue={options[options.length - 1]}
                  />
                </div> */}
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col items-center">
                  <QuestionsRatingChart
                    dataObject={ACData}
                  ></QuestionsRatingChart>
                  <h1 className="text-white text-lg md:text-2xl font-bold">
                    Total AC Submissions
                  </h1>
                </div>
                <ContestStatsCard />
                <div className="flex flex-col items-center">
                  <QuestionsRatingChart
                    dataObject={WADATA}
                  ></QuestionsRatingChart>
                  <h1 className="text-white text-lg md:text-2xl font-bold">
                    Total WA Submissions
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

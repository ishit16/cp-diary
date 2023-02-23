import { useRecoilValue } from "recoil";
import { userMaxRating } from "../../../api/UserInfo";
import { getBestAndWorstRank } from "../../../api/utils/contestStatsData";

export const ContestStatsCard = () => {
  const userContestsData = useRecoilValue(userMaxRating);
  const totalContestsGiven = userContestsData.result.length;
  const worstRank = getBestAndWorstRank(userContestsData).worstRank;
  const bestRank = getBestAndWorstRank(userContestsData).bestRank;
  const bestRatingChange =
    getBestAndWorstRank(userContestsData).bestChangeInRating;
  const worstRatingChange =
    getBestAndWorstRank(userContestsData).worstChangeInRating;

  return (
    <>
      <div className="border-solid border-sky-500 border-2 bg-gray-800 text-gray-200 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="rounded-full w-4 h-4 border border-purple-500"></div>
            <div className="text-md font-bold">Contest Stats</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-500 hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-4 text-gray-500 font-bold text-sm">
            Total Contests Given:
          </div>
          <div className="mt-4 text-gray-500 font-bold text-sm">
            {totalContestsGiven}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-4 text-gray-500 font-bold text-sm">Best Rank:</div>
          <div className="mt-4 text-gray-500 font-bold text-sm">{bestRank}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-4 text-gray-500 font-bold text-sm">
            Worst Rank:
          </div>
          <div className="mt-4 text-gray-500 font-bold text-sm">
            {worstRank}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-4 text-gray-500 font-bold text-sm">
            Best Change in Rating:
          </div>
          <div className="mt-4 text-gray-500 font-bold text-sm">
            {bestRatingChange}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-4 text-gray-500 font-bold text-sm">
            Worst Change in rating:
          </div>
          <div className="mt-4 text-gray-500 font-bold text-sm">
            {worstRatingChange}
          </div>
        </div>
      </div>
    </>
  );
};

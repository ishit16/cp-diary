import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAvatar, userHandleState, userMaxRating } from "../../api/UserInfo";
import { getBestAndWorstRank } from "../../api/utils/contestStatsData";

export const SideBarAsyncData = () => {
  const [open, setOpen] = useState(false);

  const userAvatarPicture = useRecoilValue(userAvatar);
  const userHandle = useRecoilValue(userHandleState);
  console.log(userHandle);
  const userContestData = useRecoilValue(userMaxRating);
  const userRating = getBestAndWorstRank(userContestData).currentRating;
  return (
    <>
      <img
        src={userAvatarPicture}
        className={`mx-auto mt-16 ${
          !open ? "w-12 h-12 rounded-full" : "w-24 h-24 rounded-full"
        }`}
      ></img>
      <div className="flex flex-col items-center">
        <span
          className={`font-bold text-white text-xl mx-auto mt-4 ${
            !open && "hidden"
          }`}
        >
          {userHandle}
        </span>
        <span
          className={`font-bold text-white text-6xl mt-8 ${!open && "hidden"}`}
        >
          {userRating}
        </span>
        <hr className={`w-full mt-4 border-gray-800 ${!open && "hidden"}`}></hr>
        <span></span>
      </div>
    </>
  );
};

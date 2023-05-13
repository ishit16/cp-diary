import { useState } from "react";
import { useAuthState } from "../../api/signState";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "../../api/axios";
import { refreshPageNotify } from "../toasters/toasts";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { problemCardData } from "../../api/problemAtom";

export const QuestionSpecificsForm = ({
  openForm,
  setOpen,
  problemName,
  questionID,
}: any) => {
  const [cardData, setCardData] = useRecoilState(problemCardData);
  const axiosPrivate = useAxiosPrivate();

  const deleteProblem = async () => {
    try {
      const response = await axiosPrivate.delete(`/questions/${questionID}`);
      //@ts-ignore
      console.log(response.data);
      const updatedCardData = cardData.filter(
        (card) => card._id !== questionID
      );
      setCardData(updatedCardData);
    } catch (err) {
      console.log(err);
    }
    setOpen(!openForm);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{problemName}</h3>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={deleteProblem}
              >
                Delete Problem
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpen(!openForm)}
              >
                Visit Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

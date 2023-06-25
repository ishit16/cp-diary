import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { problemCardData } from "../../api/problemAtom";

interface StickyNotesProps {
  title: string;
  questionID: string;
  openNote: any;
  setOpenNote: any;
}

export const StickyNote = ({
  title,
  questionID,
  openNote,
  setOpenNote,
}: StickyNotesProps) => {
  const [note, setNote] = useState("");
  const cardsData = useRecoilValue(problemCardData);

  useEffect(() => {
    //@ts-ignore
    const index = cardsData.findIndex((card) => card._id === questionID);
    //@ts-ignore
    setNote(cardsData[index].problemNote);
  }, [note]);

  return (
    <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-72 h-72 bg-yellow-200 outline-none focus:outline-none overflow-y-auto overflow-x-hidden">
        <h3 className="text-3xl font-semibold px-4 pt-6 font-caveat break-all">
          # {title}
        </h3>
        <button
          className="text-red-500 hover:text-red-700 absolute top-0 right-0 mt-2 mr-2"
          onClick={() => setOpenNote(!openNote)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <span className="font-caveat text-2xl break-words px-4">{note}</span>
      </div>
    </div>
  );
};

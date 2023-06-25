import { Link } from "react-router-dom";
import cardImage from "../../assets/project1.png";
import { useState } from "react";
import { QuestionSubmissionForm } from "./QuestionSubmissionForm";
import { QuestionSpecificsForm } from "./QuestionSpecifics";
import { StickyNote } from "./StickyNote";

interface QuestionCardProps {
  questionName: string;
  questionID: any;
  questionLink: URL;
}

export const QuestionCard = (props: QuestionCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [openNote, setOpenNote] = useState(false);

  const colors = ["bg-yellow-200", "bg-pink-200", "bg-gray-200"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full overflow-hidden sm:w-52 project-card">
          <div
            onClick={() => {
              window.open(`${props.questionLink}`, "_blank");
            }}
            className={`h-40 hover:cursor-pointer text-center justify-center flex-col flex bg-gray-200`}
          >
            <span className="text-3xl font-caveat text-slate-800 font-bold">
              {props.questionName}
            </span>
          </div>
          <div className="flex flex-row w-full">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="text-lg w-1/2 font-category-heading no-underline  text-white bg-question-name  font-medium text-center p-3"
            >
              Details
            </button>
            <button
              onClick={() => {
                setOpenNote(true);
              }}
              className="text-lg w-1/2 font-category-heading no-underline  text-white bg-green-400  font-medium text-center p-3"
            >
              Notes
            </button>
          </div>
        </div>
        {showModal ? (
          <QuestionSpecificsForm
            problemName={props.questionName}
            openForm={showModal}
            setOpen={setShowModal}
            questionID={props.questionID}
            questionLink={props.questionLink}
          />
        ) : (
          <></>
        )}
        {openNote ? (
          <StickyNote
            title={props.questionName}
            questionID={props.questionID}
            openNote={openNote}
            setOpenNote={setOpenNote}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

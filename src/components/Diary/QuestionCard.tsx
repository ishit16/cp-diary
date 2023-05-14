import { Link } from "react-router-dom";
import cardImage from "../../assets/project1.png";
import { useState } from "react";
import { QuestionSubmissionForm } from "./QuestionSubmissionForm";
import { QuestionSpecificsForm } from "./QuestionSpecifics";
interface QuestionCardProps {
  questionName: string;
  questionID: any;
  questionLink: URL;
}

export const QuestionCard = (props: QuestionCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full overflow-hidden sm:w-52 project-card">
          <img src={cardImage} alt="project1" className="h-40" />

          <button
            onClick={() => {
              setShowModal(true);
              console.log("Set");
            }}
            className="text-lg  font-category-heading no-underline  text-white bg-question-name  font-medium text-center p-3"
          >
            {props.questionName}
          </button>
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
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import cardImage from "../../assets/project1.png";

interface QuestionCardProps {
  questionName: string;
  tagOne: string;
  tagTwo: string;
}

export const QuestionCard = (props: QuestionCardProps) => {
  return (
    <>
      <div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full overflow-hidden sm:w-52 project-card">
          <img src={cardImage} alt="project1" className="h-40" />

          <Link
            to={"/diary"}
            className="text-lg  font-category-heading no-underline  text-white bg-question-name  font-medium text-center p-3"
          >
            {props.questionName}
          </Link>
        </div>
      </div>
    </>
  );
};

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { problemCardData } from "../../api/problemAtom";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { AddCardButton } from "./AddCardButton";
import { CategoryHeading } from "./CategoryHeading";
import { QuestionCard } from "./QuestionCard";
import { SearchBar } from "./SearchBar";
import { cva } from "class-variance-authority";

export const DiaryPageContainer = () => {
  const [cardData, setCardData] = useRecoilState(problemCardData);

  const axiosPrivate = useAxiosPrivate();
  const getCardsData = async () => {
    try {
      const response = await axiosPrivate.get("/questions");
      setCardData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCardsData();
  }, [setCardData]);

  const groupedCards = cardData.reduce((acc, card) => {
    //@ts-ignore
    if (acc[card.problemCategory]) {
      //@ts-ignore
      acc[card.problemCategory].push(card);
    } else {
      //@ts-ignore
      acc[card.problemCategory] = [card];
    }
    return acc;
  }, {});
  return (
    <>
      <div className={DiaryPageStyles()}>
        <div className={SearchBarRowStyles()}>
          <SearchBar />
          <AddCardButton />
        </div>
        <div>
          {Object.entries(groupedCards).map(([category, cards]) => (
            <div key={category}>
              <div className="py-8">
                <CategoryHeading heading={category} />
              </div>
              <div className={CardsContainerStyles()}>
                {
                  //@ts-ignore
                  cards.map((card) => (
                    <QuestionCard
                      key={card._id}
                      questionName={card.problemName}
                      questionLink={card.problemLink}
                      questionID={card._id}
                    />
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const DiaryPageStyles = cva(["flex-col", "w-full", "px-4", "md:px-20"]);

const SearchBarRowStyles = cva([
  "flex",
  "flex-row",
  "mt-20",
  "w-full",
  "gap-x-2",
]);

const CardsContainerStyles = cva([
  "grid",
  "grid-cols-2",
  "md:grid-cols-3",
  "lg:grid-cols-4",
  "gap-4",
]);

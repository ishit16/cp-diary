import { useRecoilState } from "recoil";
import { problemCardData } from "../api/problemAtom";
import { AddCardButton } from "../components/Diary/AddCardButton";
import { CategoryHeading } from "../components/Diary/CategoryHeading";
import { QuestionCard } from "../components/Diary/QuestionCard";
import { SearchBar } from "../components/Diary/SearchBar";
import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";
import { useAxiosPrivate } from "../hooks/useAxiosPrivate";
import { useEffect } from "react";

export const Diary = () => {
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

  return (
    <>
      <div className="bg-purple-landing-page bg-repeat flex-col min-h-screen h-full">
        <DashboardNavbar />
        <div className="flex">
          <SideBar />
          <div className="flex-col w-full px-4 md:px-20">
            <div className="flex flex-row mt-20 w-full gap-x-2 ">
              <SearchBar />
              <AddCardButton />
            </div>
            <div>
              <div className="py-8">
                <CategoryHeading heading={"Saved Questions"}></CategoryHeading>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cardData.map((card) => (
                  <QuestionCard
                    key={card._id}
                    questionName={card.problemName}
                    questionLink={card.problemLink}
                    questionID={card._id}
                  ></QuestionCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

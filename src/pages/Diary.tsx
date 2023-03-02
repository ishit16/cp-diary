import { useState } from "react";
import { AddCardButton } from "../components/Diary/AddCardButton";
import { CategoryHeading } from "../components/Diary/CategoryHeading";
import { QuestionCard } from "../components/Diary/QuestionCard";
import { QuestionSubmissionForm } from "../components/Diary/QuestionSubmissionForm";
import { SearchBar } from "../components/Diary/SearchBar";
import { DashboardNavbar } from "../components/navbar/Navbar";
import { SideBar } from "../components/sidebar/sidebar";

export const Diary = () => {
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
              <CategoryHeading
                heading={"Dynamic Programming"}
              ></CategoryHeading>
              <QuestionCard questionName="Petra's Stones" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

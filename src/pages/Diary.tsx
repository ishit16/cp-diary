import { PageLayout } from "../hoc/Layout";
import { DiaryPageContainer } from "../components/Diary/DiaryPageContainer";

export const Diary = () => {
  return (
    <>
      <PageLayout children={<DiaryPageContainer />} />
    </>
  );
};

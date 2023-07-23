import { FriendsContainer } from "../components/Friends/Friends";
import { PageLayout } from "../hoc/Layout";

export const FriendsPage = () => {
  return (
    <>
      <PageLayout children={<FriendsContainer />} />
    </>
  );
};

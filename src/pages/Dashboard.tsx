import { PageLayout } from "../hoc/Layout";
import { DashboardContainer } from "../components/Dashboard/DashboardContainer/DashboardContainer";

export const Dashboard = () => {
  return (
    <>
      <PageLayout children={<DashboardContainer />} />
    </>
  );
};

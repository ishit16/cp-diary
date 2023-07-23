import { PendingRequestsContainer } from "../components/PendingRequests/PendingRequestsContainer";
import { PageLayout } from "../hoc/Layout";

export const PendingRequests = () => {
  return (
    <>
      <PageLayout children={<PendingRequestsContainer />} />
    </>
  );
};

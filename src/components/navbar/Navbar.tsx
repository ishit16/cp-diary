import titleImage from "../../assets/codeforces-diary.svg";

export const DashboardNavbar = () => {
  return (
    <>
      <div className="flex flex-row items-center bg-navbar-dashboard-color px-6 shadow-2xl">
        <div>
          <img src={titleImage} className="h-auto w-1/4"></img>
        </div>
      </div>
    </>
  );
};

import titleImage from "../../assets/codeforces-diary.svg";

export const DashboardNavbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-navbar-dashboard-color px-6 shadow-2xl">
        <div>
          <img src={titleImage} className="h-auto w-1/3"></img>
        </div>
        <div>
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </>
  );
};

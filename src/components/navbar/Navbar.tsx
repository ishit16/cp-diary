import titleImage from "../../assets/codeforces-diary.svg";

export const DashboardNavbar = () => {
  return (
    <>
      <div className="flex flex-row items-center fixed w-screen bg-navbar-dashboard-color px-6 shadow-xl z-10 h-12 md:h-16">
        <div>
          <img src={titleImage} className="h-auto w-1/4"></img>
        </div>
      </div>
    </>
  );
};

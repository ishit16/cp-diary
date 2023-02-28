import { useNavigate } from "react-router-dom";
import titleImage from "../../assets/codeforces-diary.svg";
import { useLogout } from "../../hooks/useLogout";
import "./nav.css";

export const DashboardNavbar = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-row items-center fixed w-screen bg-navbar-dashboard-color px-6 py-6 shadow-xl z-10 h-12 md:h-16">
        <div>
          <img src={titleImage} className="h-auto w-1/4"></img>
        </div>
        <div className="h-8 md:h-auto">
          <button className="pushable" onClick={signOut}>
            <span className="shadow" />
            <span className="edge" />
            <span className="front font-bold">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

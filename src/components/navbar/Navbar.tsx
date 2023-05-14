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
    <nav className="flex items-center justify-between fixed w-full bg-navbar-dashboard-color px-6 py-3 md:py-2 shadow-xl z-10">
      <div className="flex items-center">
        <img src={titleImage} alt="logo" className="h-auto w-20 md:w-24" />
      </div>
      <div className="h-8 md:h-auto">
        <button className="pushable" onClick={signOut}>
          <span className="shadow" />
          <span className="edge" />
          <span className="front font-bold">Logout</span>
        </button>
      </div>
    </nav>
  );
};

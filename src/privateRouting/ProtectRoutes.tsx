import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useAuthState } from "../api/signState";

export const ProtectRoutes = () => {
  const auth = useRecoilValue(useAuthState);
  const location = useLocation();
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

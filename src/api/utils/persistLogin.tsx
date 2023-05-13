import { useState, useEffect } from "react";
import { Loading } from "react-loading-dot/lib";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { useAuthState } from "../signState";

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const auth = useRecoilValue(useAuthState);

  // @ts-ignore
  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    // @ts-ignore
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  });

  return <>{isLoading ? <Loading /> : <Outlet />}</>;
};

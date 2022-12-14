import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MAIN_PAGE_ENDPOINT } from "./constants";
import { getLocalStorage } from "./localStorage";

const RequireAuth = ({ allowedRoles }: any) => {
  const location = useLocation();

  return allowedRoles.includes(getLocalStorage("auth", "role"))
    ? <Outlet />
    : getLocalStorage("auth", "token")
      ? <Navigate to="/unauthorized" state={{ from: location }} replace />
      : <Navigate to={MAIN_PAGE_ENDPOINT} state={{ from: location }} replace />
};

export default RequireAuth;
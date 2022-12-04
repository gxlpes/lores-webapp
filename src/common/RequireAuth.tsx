import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MAIN_PAGE_ENDPOINT } from "./constants";
import { getLocalStorage } from "./localStorage";

const RequireAuth = ({ allowedRoles }: any) => {
  const location = useLocation();
  const { auth } = useAuth();
  console.log(auth);


  return auth?.role.find((role: any) => allowedRoles?.includes(role.roleId))
    ? <Outlet />
    : auth?.token
      ? <Navigate to="/unauthorized" state={{ from: location }} replace />
      : <Navigate to={MAIN_PAGE_ENDPOINT} state={{ from: location }} replace />
};

export default RequireAuth;
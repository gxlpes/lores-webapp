import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MAIN_PAGE_ENDPOINT } from "./constants";
import { getLocalStorage } from "./localStorage";

const RequireAuth = ({ allowedRoles }: any) => {
  console.log("roles", allowedRoles);

  const location = useLocation();
  const { auth } = useAuth();
  console.log(auth);



  return getLocalStorage("role") == allowedRoles[0]
    ? <Outlet />
    : auth?.token && getLocalStorage("token")
      ? <Navigate to="/unauthorized" state={{ from: location }} replace />
      : <Navigate to={MAIN_PAGE_ENDPOINT} state={{ from: location }} replace />
};

export default RequireAuth;
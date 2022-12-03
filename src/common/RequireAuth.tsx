import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LOGIN_PAGE_ENDPOINT, MAIN_PAGE_ENDPOINT } from "./constants";

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
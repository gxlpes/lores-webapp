import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LOGIN_PAGE_ENDPOINT } from "./constants";

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();

  return auth?.token ? <Outlet /> : <Navigate to={LOGIN_PAGE_ENDPOINT} state={{ from: location }} replace />;
};

export default RequireAuth;
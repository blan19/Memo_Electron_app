import { RootState } from "@/reducers/index";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isLogin: boolean;
}

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector((state: RootState) => state.user);
  if (!user.isLogin) {
    return <Navigate replace to="/login" />;
  }
  return children;
};

export default PrivateRoute;

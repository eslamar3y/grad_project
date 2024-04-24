/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteAdmin({ children, path }) {
  const { userLogin } = useContext(AuthContext);

  return <>{userLogin.role == "Admin" ? children : <Navigate to={path} />}</>;
}

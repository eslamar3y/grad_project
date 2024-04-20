/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import Home from "../Pages/Home/Home";

export default function ProtectedRoute({ children }) {
  const { userLogin } = useContext(AuthContext);

  return <>{userLogin.role == "Admin" ? children : <Home />}</>;
}

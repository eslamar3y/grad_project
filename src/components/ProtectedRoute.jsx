/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import Login from "../Pages/Login/Login";

export default function ProtectedRoute({ children }) {
    const { userLogin } = useContext(AuthContext);

    return (
        <>
            {userLogin ? children : <Login />}
        </>
    )
}
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, path }) {
    const { userLogin } = useContext(AuthContext);

    return (
        <>
            {userLogin ? children : <Navigate to={path} />}
        </>
    )
}
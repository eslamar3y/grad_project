/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    const login = async (Username, Password) => {
        try {
            const formData = new FormData();
            formData.append('Username', Username);
            formData.append('Password', Password);

            const response = await fetch("https://localhost:7289/api/Accounts/login", {
                method: "POST",
                headers: {
                    'accept': '*/*', // This header is optional
                },
                body: formData
            });

            const data = await response.json();

            localStorage.setItem('tokens', JSON.stringify(data));
            const accessToken = data.accessToken;
            const refreshToken = data.refreshToken;

            const parts = accessToken.split('.');
            const payload = JSON.parse(atob(parts[1]));

            console.log(payload);
            const name = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
            setUser(name);
            console.log('Name:', name);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const logout = () => {
        localStorage.removeItem("tokens");
        setUser(null);
        Navigate('/');
    }


    return (
        <AuthContext.Provider value={{ login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}
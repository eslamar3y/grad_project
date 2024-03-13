/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";


export const AuthContext = createContext({
    login: () => { },
    register: () => { },
    logout: () => { },
    userLogin: false,
});

export default function AuthContextProvider({ children }) {
    const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem("tokens")) ? true : false);

    const login = async (Username, Password) => {
        // try {
        console.log(Username, Password);
        const formData = new FormData();
        formData.append('Username', Username);
        formData.append('Password', Password);

        // const response = await fetch("https://localhost:7289/api/Accounts/login", {
        //     method: "POST",
        //     headers: {
        //         'accept': '*/*', // This header is optional
        //     },
        //     body: formData
        // });
        // const data = await response.json();

        // another solution
        const response = await axios.post("https://localhost:7289/api/Accounts/login", formData, {
            headers: {
                'Accept': '*/*', // Optional header
                'Content-Type': 'multipart/form-data' // Required for FormData
            }
        });

        const data = await response.data;
        console.log(data)

        localStorage.setItem('tokens', JSON.stringify(data));
        const accessToken = data.accessToken;
        // const refreshToken = data.refreshToken;

        const parts = accessToken.split('.');
        const payload = JSON.parse(atob(parts[1]));
        console.log(payload);

        const name = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        const id = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        localStorage.setItem('userData', JSON.stringify({ name: name, id: id }));
        setUserLogin(true);
        // } catch (err) {
        //     if (err.response.status == 401) {
        //         throw new Error("Unautherized user");
        //     }
        //     if (err.response.status == 500) {
        //         throw new Error("Server error, Failed to login please try again");
        //     }
        //     if (!err.response.ok) {
        //         throw new Error("Somthing wrong happened please try again");
        //     }
        // }
    }

    const register = async (choosenData, registerType) => {
        let url = 'https://localhost:7289/api/Accounts/farmOwner';
        if (registerType === 'expert') {
            url = 'https://localhost:7289/api/Accounts/doctor';
        }

        const response = await axios.post(url, choosenData, {
            headers: {
                'Accept': '*/*', // Optional header
                'Content-Type': 'multipart/form-data' // Required for FormData
            }
        });
        console.log(response);
        // const response = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         'accept': '*/*', // This header is optional
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(choosenData)
        // });
        console.log("ok")
    }

    const logout = () => {
        localStorage.removeItem("tokens");
        localStorage.removeItem("userData");
        setUserLogin(false);
    }


    return (
        <AuthContext.Provider value={{ login, register, logout, userLogin }}>
            {children}
        </AuthContext.Provider>
    );
}
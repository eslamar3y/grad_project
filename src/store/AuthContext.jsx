/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  login: () => { },
  register: () => { },
  logout: () => { },
  IsSubscribed: () => { },
  userLogin: null,
  accessToken: null,
});

export default function AuthContextProvider({ children }) {
  const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem("userData")) || null);
  const [accessToken, setAccessToken] = useState(null);

  const login = async (Username, Password) => {
    console.log(Username, Password);
    const formData = new FormData();
    formData.append("Username", Username);
    formData.append("Password", Password);

    const response = await axios.post("https://localhost:7289/api/Accounts/login", formData, {
      headers: {
        'Accept': '*/*', // Optional header
        'Content-Type': 'multipart/form-data' // Required for FormData
      }
    });

    const data = await response.data;
    console.log(data)

    // localStorage.setItem('tokens', JSON.stringify(data));
    const accessToken = data.accessToken;
    // const refreshToken = data.refreshToken;
    setAccessToken(accessToken);
    console.log(accessToken)

    const parts = accessToken.split('.');
    const payload = JSON.parse(atob(parts[1]));
    console.log(payload);

    const id = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    const name = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    localStorage.setItem('userData', JSON.stringify({ name: name, id: id, role: role }));
    setUserLogin(JSON.parse(localStorage.getItem("userData")));
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
    console.log("ok")
  }

  const logout = () => {
    localStorage.removeItem("userData");
    setUserLogin(null);
  }

  const IsSubscribed = async (userId) => {
    const response = await fetch(`https://localhost:7289/api/Accounts/farmOwner/IsSubscripted?id=${userId}`);
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the expert details, please try again later.');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    const data = await response.json();
    console.log(data);
    return data;
  }


  return (
    <AuthContext.Provider value={{ login, register, logout, IsSubscribed, userLogin, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
}
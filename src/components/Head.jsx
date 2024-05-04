import { NavLink } from "react-router-dom";
import Logo from "../assets/siteLogo.png";
import "./Head.css";
import Nav from "./Nav";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/AuthContext";
import userImg from "../assets/user.png";

export default function Head() {
  const { userLogin, logout } = useContext(AuthContext);
  const [personalPic, setPersonalPic] = useState(null);
  const [role, setRole] = useState("");
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const { id, role } = userData;
      setRole(role);

      if (role === "Doctor") {
        fetch(`https://localhost:7289/api/Accounts/doctor/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setPersonalPic(data.personalPhoto);
          })
          .catch((error) => {
            console.log("Error fetching doctor data:", error);
          });
      } else if (role === "FarmOwner") {
        fetch(`https://localhost:7289/api/Accounts/farmOwner/?id=${id}`)
          .then((response) => response.json())
          .then((data) => {
            setPersonalPic(data.personalPhoto);
          })
          .catch((error) => {
            console.log("Error fetching farm owner data:", error);
          });
      }
    }
  }, []);

  return (
    <header className="sticky top-5 z-20 px-5 py-4 2xl:flex 2xl:justify-between 2xl:items-center 2xl:px-8">
      <div className="flex justify-between items-center 2xl:grow flex-wrap">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <Nav />
      </div>
      {!userLogin ? (
        <NavLink to="login">
          <button className="hidden mt-5 shadow-custom w-[158px] h-[48px] border-black bg-mainColor rounded-2xl 2xl:block 2xl:mt-0">
            Signin
          </button>
        </NavLink>
      ) : (
        <div className="hidden 2xl:flex items-center gap-5">
          <NavLink to="profile">
            <img
              src={personalPic ? personalPic : userImg}
              alt="user image"
              className="w-12 h-12 object-fill border-4 border-white rounded-full"
            />
          </NavLink>
          <button
            onClick={logout}
            className="hidden mt-5 shadow-custom px-10 py-2 border-black bg-mainColor font-semibold rounded-2xl 2xl:block 2xl:mt-0"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

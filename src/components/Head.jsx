import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/siteLogo.png";
import "./Head.css";
import Nav from "./Nav";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import userImg from "../assets/user.png";


export default function Head() {
  const { userLogin, logout } = useContext(AuthContext);

  return (
    <header className="sticky top-5 z-20 px-5 py-4 2xl:flex 2xl:justify-between 2xl:items-center 2xl:px-8">
      <div className="flex justify-between items-center 2xl:grow flex-wrap">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <Nav />
      </div>
      {!userLogin ?
        <NavLink to="login">
          <button className="hidden mt-5 shadow-custom w-[158px] h-[48px] border-black bg-mainColor rounded-2xl 2xl:block 2xl:mt-0">
            Signin
          </button>
        </NavLink>
        :
        <div className="hidden 2xl:flex items-center gap-5">
          <Link to="/profile">
            <img src={userImg} alt="user image" className="w-12 h-12 object-contain border-4 border-white rounded-full" />
          </Link>
          <button onClick={logout} className="hidden mt-5 shadow-custom px-10 py-2 border-black bg-mainColor font-semibold rounded-2xl 2xl:block 2xl:mt-0">
            Logout
          </button>
        </div>
      }
    </header>
  );
}

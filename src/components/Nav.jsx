import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? " font-bold" : "")}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/detection"
        className={({ isActive }) => (isActive ? " font-bold" : "")}
      >
        Disease Detection
      </NavLink>
      <NavLink
        to="/equipments"
        className={({ isActive }) => (isActive ? " font-bold" : "")}
      >
        Farm Equipments
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? " font-bold" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) => (isActive ? " font-bold" : "")}
      >
        Q&A, Chat
      </NavLink>
    </>
  );
};

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const { userLogin, logout } = useContext(AuthContext);


  return (
    <>
      <nav>
        <div className="hidden 2xl:flex 2xl:gap-6 2xl:items-center">
          <NavLinks />
        </div>
        <button className=" flex align-top 2xl:hidden">
          <FaBars className="text-2xl" onClick={handleShowMenu} />
        </button>
      </nav>
      {showMenu && (
        <menu className="flex flex-col w-full h-[610px] gap-5 mt-10 bg-white p-4 rounded-lg absolute top-5 right-0 z-[9] ">
          <NavLinks />
          {
            userLogin === false ?
              <NavLink to="login">
                <button className="w-[90%] h-[48px] absolute left-[50%] translate-x-[-50%] bottom-6 mt-5 shadow-custom border-black bg-secondColor text-white rounded-2xl">
                  Signin
                </button>
              </NavLink>
              :
              <button onClick={logout} className="w-[90%] h-[48px] absolute left-[50%] translate-x-[-50%] bottom-6 mt-5 shadow-custom border-black bg-secondColor text-white rounded-2xl">
                Logout
              </button>
          }
        </menu>
      )}
    </>
  );
}

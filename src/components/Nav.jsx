import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";


const NavLinks = () => {
  const { userLogin } = useContext(AuthContext);

  return (
    <>
      <NavLink
        to="/"
        className={`p-1 text-lg ${({ isActive }) => (isActive ? " font-semibold" : "")}`}
        end
      >
        Home
      </NavLink>
      {userLogin && (
        <NavLink
          to="/detection"
          className={`p-1 text-lg ${({ isActive }) => (isActive ? " font-semibold" : "")}`}
        >
          Disease Detection
        </NavLink>
      )}
      {userLogin && (
        <NavLink
          to="/equipments"
          className={`p-1 text-lg ${({ isActive }) => (isActive ? " font-semibold" : "")}`}
        >
          Farm Equipments
        </NavLink>
      )}
      <NavLink
        to="/about"
        className={`p-1 text-lg ${({ isActive }) => (isActive ? " font-semibold" : "")}`}
      >
        About
      </NavLink>
      <NavLink
        to="/chat"
        className={`p-1 text-lg ${({ isActive }) => (isActive ? " font-semibold" : "")}`}
      >
        Q&A, Chat
      </NavLink>
      {
        userLogin && (
          <NavLink
            to="/realChat"
            className={`p-1 text-lg ${({ isActive }) => (isActive ? " font-semibold" : "")}`}
          >
            Chat
          </NavLink>)
      }
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
      <nav className="2xl:mx-auto">
        <div className="hidden 2xl:flex 2xl:gap-6 2xl:items-center">
          <NavLinks />
        </div>
        <button className=" flex align-top 2xl:hidden">
          <FaBars className="text-2xl" onClick={handleShowMenu} />
        </button>
      </nav>
      {showMenu && (
        <menu className="menu__style">
          <NavLinks />
          {!userLogin ? (
            <NavLink to="login">
              <button className="w-[90%] h-[48px] absolute left-[50%] translate-x-[-50%] bottom-6 mt-5 shadow-custom border-black bg-secondColor text-white rounded-2xl">
                Signin
              </button>
            </NavLink>
          ) : (
            <button
              onClick={logout}
              className="w-[90%] h-[48px] absolute left-[50%] translate-x-[-50%] bottom-6 mt-5 shadow-custom border-black bg-secondColor text-white rounded-2xl"
            >
              Logout
            </button>
          )}
        </menu>
      )}
    </>
  );
}

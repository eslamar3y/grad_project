// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/siteLogo.png";
import "./Head.css";
import Nav from "./Nav";

export default function Head() {
  return (
    <header className="sm:px-28 py-3 xs:px-12 xl:bg-secondColor">
      <div className="flex flex-nowrap items-center justify-between">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <Nav />
      </div>
    </header>
  );
}

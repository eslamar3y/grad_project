// import { NavLink } from "react-router-dom";
import Logo from "../assets/siteLogo.png";
import "./Head.css";
import Nav from "./Nav";

export default function Head() {
  return (
    // <header className="2xl:flex 2xl:justify-between px-0 2xl:items-center 2xl:px-8">
    //   px-0  2xl:px-28 2xl:pt-6 2xl:pb-7 xl:px-28 xl:pt-6 xl:pb-7 lg:px-28 lg:pt-6 lg:pb-7 md:px-28 md:pt-6 md:pb-7
    <header className="  sm:px-28  sm:pt-6  sm:pb-7 xs:px-12 xs:pt-6  xs:pb-7 xl:bg-[#585ec7]">
      {/* <div className="flex justify-between  flex-wrap"> */}
      <div className="flex flex-nowrap items-center justify-between 2xl:text-white">
        <img className="" src={Logo} alt="logo" />
        <Nav />
      </div>
    </header>
  );
}

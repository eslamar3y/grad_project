import logo from "../assets/logoAdmin.png";
import { FaUser } from "react-icons/fa6";
import { FaVirus } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const adminSidebar = () => {
  return (
    <aside className="w-24 bg-white">
      {/* Sidebar content */}
      <div className="flex flex-col h-full">
        {/* Sidebar links */}
        <nav className="flex-1 px-2 py-4 ">
          <NavLink to="/admin/dashboard" className="block p-2 mb-8   ">
            <img src={logo} alt="" />
          </NavLink>
          <hr />
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "group text-black block pt-8 w-[100%] relative"
                : "group text-gray-500 block hover:text-black pt-8 w-[100%] relative"
            }
          >
            <FaUser className="m-auto " />
            <span className="hidden group-hover:block absolute top-6 left-20  bg-gray-800 text-white px-2 py-1 rounded-md transform -translate-x-1/2 -translate-y-full  transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Users
            </span>
          </NavLink>
          <NavLink
            to="/admin/diseases"
            className={({ isActive }) =>
              isActive
                ? "group text-black block pt-8 w-[100%] relative"
                : "group text-gray-500 block hover:text-black pt-8 w-[100%] relative"
            }
          >
            <FaVirus className="m-auto " />
            <span className="hidden group-hover:block absolute top-6 left-24  bg-gray-800 text-white px-2 py-1 rounded-md transform -translate-x-1/2 -translate-y-full  transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Diseases
            </span>
          </NavLink>
          <NavLink
            to="/admin/feedback"
            className={({ isActive }) =>
              isActive
                ? "group text-black block pt-8 w-[100%] relative"
                : "group text-gray-500 block hover:text-black pt-8 w-[100%] relative"
            }
          >
            <VscFeedback className="m-auto " />
            <span className="hidden group-hover:block absolute top-6 left-24  bg-gray-800 text-white px-2 py-1 rounded-md transform -translate-x-1/2 -translate-y-full  transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Feedback
            </span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default adminSidebar;

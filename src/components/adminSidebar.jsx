import logo from "../assets/logoAdmin.png";
import { FaUser } from "react-icons/fa6";
import { FaVirus } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

const adminSidebar = () => {
  return (
    <aside className="w-24 bg-white">
      {/* Sidebar content */}
      <div className="flex flex-col h-full">
        {/* Sidebar links */}
        <nav className="flex-1 px-2 py-4 ">
          <a href="/admin/dashboard" className="block p-2 mb-8   ">
            <img src={logo} alt="" />
          </a>
          <hr />
          <a href="#" className="block    hover:text-black pt-8  w-[100%]">
            <FaUser className="m-auto" />
          </a>
          <a
            href="#"
            className="block p-2 text-gray-500  hover:text-black pt-8"
          >
            <FaVirus className="m-auto" />
          </a>
          <a
            href="#"
            className="block p-2 text-gray-500  hover:text-black pt-8"
          >
            <VscFeedback className="m-auto" />
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default adminSidebar;

import user from "../../assets/UserAdmin.png";
import logo from "../../assets/logoAdmin.png";
// import userIcon from "../../assets/userIcon.png";
// import diseaseIcon from "../../assets/diseaseIcon.png";
// import feedbackIcon from "../../assets/feedback.png";
import { FaUser } from "react-icons/fa6";
import { FaVirus } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Users = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex ">
      {/* sidebar */}
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
              {/* <img src={userIcon} alt="" className="m-auto" /> */}
              <FaUser className="m-auto" />
            </a>
            <a
              href="#"
              className="block p-2 text-gray-500  hover:text-black pt-8"
            >
              {/* <img src={diseaseIcon} alt="" className="m-auto" /> */}
              <FaVirus className="m-auto" />
            </a>
            <a
              href="#"
              className="block p-2 text-gray-500  hover:text-black pt-8"
            >
              {/* <img src={feedbackIcon} alt="" className="m-auto" /> */}
              <VscFeedback className="m-auto" />
            </a>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4">
        {/* Navigation */}
        <nav className="" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-12">
            <div className="">
              <div className="flex items-center justify-between h-16">
                {/* Search input */}
                <div className=" flex flex-1 justify-center px-2 lg:mr-6 lg:justify-start">
                  <div className="w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM2 8a8 8 0 1116 0 8 8 0 01-16 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5  placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo */}
                <div className=" flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={user}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Filter */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-medium text-gray-800">Filter By:</h2>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="filter"
            id="filter"
          >
            <option value="">All</option>
            <option value="expert">Expert</option>
            <option value="farm-owner">Farm Owner</option>
          </select>
        </div>

        {/* Your main content here */}
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          {/* Table */}
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table headers */}
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <button className="SignInButon text-xs font-semibold font-popins mx-auto w-24 h-18 text-white rounded-2xl p-2 mr-2">
                    add user
                  </button>
                  <MdDelete className="inline mr-4 text-2xl text-black cursor-pointer " />
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {/* Table rows go here */}
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input type="checkbox" name="" id="" className="mr-4" />
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Expert
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sam@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  015545123545
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="bg-[#585EC7] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    Enable
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                  <MdEdit className="inline mr-4 text-2xl text-black cursor-pointer ml-16" />
                  <MdDelete className="inline mr-4 text-2xl text-black cursor-pointer" />
                </td>
              </tr>
              {/* Add more table rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Users;

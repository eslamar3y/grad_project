// AdminNav.jsx
import user from "../assets/UserAdmin.png";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function AdminNav({
  searchQuery,
  handleSearchChange,
  forsearch = false,
}) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value !== "") {
      if (forsearch === true) {
        console.log("Searching for diseases");
        fetch(
          `https://localhost:7289/api/Disease?diseaseNameSearchTerm=${e.target.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            handleSearchChange(data); // Update diseases state with fetched data
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        console.log("Searching for users");
        fetch(
          `https://localhost:7289/api/Accounts?UsernameSearchTerm=${e.target.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            handleSearchChange(data); // Update users state with fetched data
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    }
    handleSearchChange(e.target.value);
  }

  return (
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
                    <IoMdSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5  placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    value={query}
                    onChange={handleChange}
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
  );
}

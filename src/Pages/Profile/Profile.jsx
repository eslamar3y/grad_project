import { useState } from "react";
import profilepng from "../../assets/profile.png";
import { NavLink } from "react-router-dom";

const Profile = () => {
  // State for input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const home = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
    style="fill:#FFFFFF;">
    <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
    </svg>`;
  //   const edit = `<svg fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"></path></g></svg>`;

  // Handle form submission
  const handleSave = () => {
    // Add your logic to save the data
    console.log("Saving profile data...");
  };

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="flex flex-col md:flex-row w-screen-lg bg-[#d9d9d9] h-screen font-popins">
      {/* Sidebar */}
      <div className="md:w-1/7 bg-[#018391]  p-4">
        <div className="flex flex-col items-center mb-4">
          <img
            src={profilepng}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-2"
          />
          <NavLink to="/">
            <img
              className="w-7 h-7 mr-2 mt-16"
              src={`data:image/svg+xml,${encodeURIComponent(home)}`}
              alt="Custom SVG Image"
            />
          </NavLink>
        </div>
      </div>
      {/* Profile Statement */}
      <div className="md:w-1/5 bg-[#d9d9d9]  p-4 border-r-2 border-[#a6a6a6]">
        <h2 className=" mb-2 text-center mt-24">
          <svg
            className="w-10 inline mr-7"
            fill="#000000"
            viewBox="-2.4 -2.4 28.80 28.80"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            stroke="#000000"
            strokeWidth="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"></path>
            </g>
          </svg>
          <span className="text-xl font-bold">Edit Profile</span>
        </h2>
      </div>
      {/* Input Fields */}
      <div className="md:w-1/2  ml-44 pt-10 pl-12 flex flex-col">
        <img
          src={profilepng}
          alt="Image"
          className="w-24 h-auto mb-4 ml-auto"
        />
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="firstName" className="block mb-1 font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded pl-4"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="block mb-1 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded pl-4"
            />
          </div>
        </div>
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded pl-4"
        />
        <label htmlFor="address" className="block mb-1 font-semibold">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-4 p-2 border rounded pl-4"
        />
        <label htmlFor="contactNumber" className="block mb-1 font-semibold">
          Contact Number
        </label>
        <input
          type="text"
          id="contactNumber"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="w-full mb-4 p-2 border rounded pl-4"
        />
        {/* Buttons */}
        <div className="flex justify-start mt-24">
          <button
            onClick={() => console.log("Cancel clicked")}
            className="mr-9 px-4  bg-white text-secondColor border-2 border-secondColor w-24 h-9 rounded    "
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 bg-secondColor text-white w-24 h-9 rounded font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Profile;

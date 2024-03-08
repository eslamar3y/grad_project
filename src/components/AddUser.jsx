/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function AddUser({ onAdd, onClose, showAddModal }) {
  const [newUser, setNewUser] = useState({
    id: null,
    name: "",
    position: "",
    email: "",
    phonenumber: "",
    status: "",
  });

  const handleChange = useCallback((input, value) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [input]: value,
    }));
  }, []);
  function AddUser() {
    setNewUser((prevUser) => ({
      ...prevUser,
      id: Math.random() * 100,
    }));
    onAdd(newUser);
  }

  return (
    <Modal open={showAddModal} onClose={onClose}>
      <form className="px-6 py-6 rounded-2xl bg-mainColor relative">
        <h2 className="font-bold text-2xl mb-8 text-center">Add User</h2>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="User Name"
            className="p-2 rounded"
            onChange={(e) => handleChange("name", e.target.value)}
            value={newUser.name}
          />
          <input
            type="text"
            placeholder="Position"
            className="p-2 rounded"
            onChange={(e) => handleChange("position", e.target.value)}
            value={newUser.position}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded"
            onChange={(e) => handleChange("email", e.target.value)}
            value={newUser.email}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="p-2 rounded"
            onChange={(e) => handleChange("phonenumber", e.target.value)}
            value={newUser.phonenumber}
          />
          <input
            type="text"
            placeholder="Status"
            className="p-2 rounded"
            onChange={(e) => handleChange("status", e.target.value)}
            value={newUser.status}
          />
        </div>
        <button
          type="button"
          className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold"
          onClick={AddUser}
        >
          Add User
        </button>
        <MdOutlineClose
          className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer"
          onClick={onClose}
        />
      </form>
    </Modal>
  );
}

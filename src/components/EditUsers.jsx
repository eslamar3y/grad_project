/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function EditUsers({
  onClose,
  showEditModal,
  onEdit,
  existUser,
}) {
  const [User, setUser] = useState(existUser);

  const handleChange = useCallback((input, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [input]: value,
    }));
  }, []);

  function editUser() {
    onEdit(existUser.id, User);
  }

  return (
    <Modal open={showEditModal} onClose={onClose} backdropOpacity={10}>
      <form className="px-6 py-6 rounded-2xl bg-mainColor relative">
        <h2 className="font-bold text-2xl mb-8 text-center">Edit User</h2>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="User Name"
            value={User.name}
            className="p-2 rounded"
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="position"
            value={User.position}
            className="p-2 rounded"
            onChange={(e) => handleChange("position", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={User.email}
            className="p-2 rounded"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={User.phonenumber}
            className="p-2 rounded"
            onChange={(e) => handleChange("phonenumber", e.target.value)}
          />
          <input
            type="text"
            placeholder="Status"
            value={User.status}
            className="p-2 rounded"
            onChange={(e) => handleChange("status", e.target.value)}
          />
        </div>
        <button
          type="button"
          className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold"
          onClick={editUser}
        >
          Edit User
        </button>
        <MdOutlineClose
          className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer"
          onClick={onClose}
        />
      </form>
    </Modal>
  );
}

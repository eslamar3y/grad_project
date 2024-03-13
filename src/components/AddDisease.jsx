/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function AddDisease({ onAdd, onClose, showAddModal }) {
  const [newDisease, setNewDisease] = useState({
    id: null,
    name: "",
    type: "",
    image: "",
    info: "",
  });

  const handleChange = useCallback((input, value) => {
    setNewDisease((prevDisease) => ({
      ...prevDisease,
      [input]: value,
    }));
  }, []);
  function AddDisease() {
    setNewDisease((prevDisease) => ({
      ...prevDisease,
      id: Math.random() * 100,
    }));
    onAdd(newDisease);
  }

  return (
    <Modal open={showAddModal} onClose={onClose}>
      <form className="px-6 py-6 rounded-2xl bg-mainColor relative">
        <h2 className="font-bold text-2xl mb-8 text-center">Add Disease</h2>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Disease Name"
            className="p-2 rounded"
            onChange={(e) => handleChange("name", e.target.value)}
            value={newDisease.name}
          />
          <input
            type="text"
            placeholder="type"
            className="p-2 rounded"
            onChange={(e) => handleChange("type", e.target.value)}
            value={newDisease.position}
          />
          <input
            type="text"
            placeholder="Image"
            className="p-2 rounded"
            onChange={(e) => handleChange("image", e.target.value)}
            value={newDisease.image}
          />
          <input
            type="text"
            placeholder="Info"
            className="p-2 rounded"
            onChange={(e) => handleChange("info", e.target.value)}
            value={newDisease.phonenumber}
          />
        </div>
        <button
          type="button"
          className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold"
          onClick={AddDisease}
        >
          Add Disease
        </button>
        <MdOutlineClose
          className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer"
          onClick={onClose}
        />
      </form>
    </Modal>
  );
}

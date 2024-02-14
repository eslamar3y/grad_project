/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function AddEquipment({ onAdd, onClose, showAddModal }) {
    const [newEquipment, setNewEquipment] = useState({
        id: null,
        title: "",
        description: "",
        count: 0,
        image: null
    });

    const handleChange = useCallback((input, value) => {
        setNewEquipment((prevEquipment) => ({
            ...prevEquipment,
            [input]: value,
        }))
    }, []);
    function AddEquipment() {
        setNewEquipment((prevEquipment) => ({
            ...prevEquipment,
            id: Math.random() * 100
        }));
        onAdd(newEquipment);
    }


    return (
        <Modal open={showAddModal} onClose={onClose}>
            <form className="px-6 py-6 rounded-2xl bg-mainColor relative">
                <h2 className="font-bold text-2xl mb-8 text-center">Add Equipment</h2>
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder="Equipment Name" className="p-2 rounded" onChange={(e) => handleChange("title", e.target.value)} value={newEquipment.title} />
                    <input type="text" placeholder="Description" className="p-2 rounded" onChange={(e) => handleChange("description", e.target.value)} value={newEquipment.description} />
                    <input type="number" placeholder="Count" className="p-2 rounded" onChange={(e) => handleChange("count", e.target.value)} value={newEquipment.count} />
                    <ImageUpload onChange={handleChange} />
                </div>
                <button type="button" className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold" onClick={AddEquipment}>Add Equipment</button>
                <MdOutlineClose className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer" onClick={onClose} />
            </form>
        </Modal>
    )
}
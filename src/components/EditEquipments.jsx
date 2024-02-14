/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function EditEquipments({ onClose, showEditModal, onEdit, existEquipment }) {
    // console.log(existEquipment);
    const [Equipment, setEquipment] = useState(existEquipment);

    const handleChange = useCallback((input, value) => {
        setEquipment((prevEquipment) => ({
            ...prevEquipment,
            [input]: value,
        }))
    }, []);

    function editEquipment() {
        onEdit(existEquipment.id, Equipment);
    }


    return (
        <Modal open={showEditModal} onClose={onClose}>
            <form className="px-6 py-6 rounded-2xl bg-mainColor relative">
                <h2 className="font-bold text-2xl mb-8 text-center">Edit Equipment</h2>
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder="Equipment Name" value={Equipment.title} className="p-2 rounded" onChange={(e) => handleChange("title", e.target.value)} />
                    <input type="text" placeholder="Description" value={Equipment.description} className="p-2 rounded" onChange={(e) => handleChange("description", e.target.value)} />
                    <input type="number" placeholder="Count" value={Equipment.count} className="p-2 rounded" onChange={(e) => handleChange("count", e.target.value)} />
                    <ImageUpload value={Equipment.image} onChangeEdit={handleChange} />
                </div>
                <button type="button" className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold" onClick={editEquipment}>Edit Equipment</button>
                <MdOutlineClose className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer" onClick={onClose} />
            </form>
        </Modal>
    )
}
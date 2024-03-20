/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addEquipment, queryClient } from "../Http/equipmentsHttp";



export default function AddEquipment({ onClose, showAddModal }) {
    const [imageFile, setImageFile] = useState();
    const { mutate } = useMutation({
        mutationFn: addEquipment,
        onSuccess: () => {
            queryClient.invalidateQueries(["equipments"]);
            onClose();
        }
    })

    function getImageFile(imgFile) {
        setImageFile(imgFile);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userData"));
        const formData = new FormData(e.target);
        formData.append("OwnerId", user.id);
        formData.append("PhotoPath", imageFile);
        mutate(formData);
    }


    return (
        <Modal method="POST" open={showAddModal} onClose={onClose}>
            <form className="px-6 py-6 rounded-2xl bg-mainColor relative" onSubmit={handleSubmit}>
                <h2 className="font-bold text-2xl mb-8 text-center">Add Equipment</h2>
                <div className="flex flex-col gap-5">
                    <input name="Name" type="text" required placeholder="Equipment Name" className="p-2 rounded" />
                    <input name="Description" type="text" required placeholder="Description" className="p-2 rounded" />
                    <input name="Count" type="number" required placeholder="Count" className="p-2 rounded" />
                    <ImageUpload getImageFile={getImageFile} />
                </div>
                <button className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold" >Add Equipment</button>
                <MdOutlineClose className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer" onClick={onClose} />
            </form>
        </Modal>
    )
}
/* eslint-disable react/prop-types */
import { MdOutlineClose } from "react-icons/md";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editEquipment, getEquipmentDetails, queryClient } from "../Http/equipmentsHttp";
import { useParams } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";


export default function EditEquipments({ onClose, showEditModal }) {
    const params = useParams();
    const [imageFile, setImageFile] = useState();
    const { mutate, isPending: isEditPending, isError: isEditError, error: editError } = useMutation({
        mutationFn: editEquipment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["equipments"] });
            onClose();
        }
    });
    const { data: Equipment, isPending, isError, error } = useQuery({
        queryKey: ["equipments", { id: params.id }],
        queryFn: ({ signal }) => getEquipmentDetails({ id: params.id, signal })
    })


    const getImageFile = (imgFile) => {
        setImageFile(() => imgFile);
    }

    if (Equipment) {
        console.log(Equipment);
    }


    function handleSubmit(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userData"));
        const formData = new FormData(e.target);
        formData.append("OwnerId", user.id);
        console.log("img file ::::", imageFile)
        formData.append("photoPath", imageFile);
        formData.append("ID", params.id);
        mutate(formData);
    }


    return (
        <Modal open={showEditModal} onClose={onClose}>
            {isPending &&
                <div className="flex justify-center items-center">
                    <Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    /></div>
            }
            {Equipment &&
                <form onSubmit={handleSubmit} className="px-6 py-6 rounded-2xl bg-mainColor relative">
                    <h2 className="font-bold text-2xl mb-8 text-center">Edit Equipment</h2>
                    <div className="flex flex-col gap-5">
                        <input name="Name" type="text" placeholder="Equipment Name" required
                            defaultValue={Equipment?.name ?? ""}
                            className="p-2 rounded"
                        />
                        <input name="Description" type="text" placeholder="Description" required
                            defaultValue={Equipment?.description ?? ""}
                            className="p-2 rounded"
                        />
                        <input name="Count" type="number" placeholder="Count" required
                            defaultValue={Equipment?.count ?? 0}
                            className="p-2 rounded"
                        />
                        <ImageUpload
                            defaultImage={Equipment?.photoPath}
                            getImageFile={getImageFile}
                        />
                    </div>
                    {
                        isEditPending ?
                            <p>loading...</p>
                            :
                            <button type="submit" className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold">Edit Equipment</button>
                    }
                    {isEditError && <p className="flex justify-center items-center text-2xl text-red-500">{editError.info?.message || "All field required"}</p>}
                    <MdOutlineClose className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer" onClick={onClose} />
                </form>}
            {isError && <p className="flex justify-center items-center text-2xl text-red-500">{error.info?.message || "Failed to load equipment details, please try again later"}</p>}
        </Modal>
    )
}
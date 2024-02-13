import Head from "../../components/SimpleNav";
import equip1 from "../../assets/equip1.png";
import equip2 from "../../assets/equip2.png";
import equip3 from "../../assets/equip3.png";
import equip4 from "../../assets/equip4.png";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Footer from "../../components/Footer";
import { useState } from "react";
import AddEquipment from "../../components/AddEquipment";
import EditEquipments from "../../components/EditEquipments";


const equipments = [
    {
        id: Math.random() * 100,
        title: "Optical Dissolved Oxygen Meter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        count: 4,
        image: equip1
    },
    {
        id: Math.random() * 100,
        title: "Dissolved Oxygen Meter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        count: 3,
        image: equip2
    },
    {
        id: Math.random() * 100,
        title: "Optical Dissolved Oxygen Meter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        count: 2,
        image: equip3
    },
    {
        id: Math.random() * 100,
        title: "Dissolved Oxygen Meter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        count: 1,
        image: equip4
    },
]

export default function Equipments() {
    const [Equipments, setEquipments] = useState(equipments);
    const [selectedEquipment, setSelectedEquipment] = useState({});
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    function handleShowModal() {
        setShowAddModal(() => true);
    }
    function handleCloseAddModal() {
        setShowAddModal(() => false);
    }

    function handleShowEditModal(existEquipment) {
        setShowEditModal(() => true);
        setSelectedEquipment(() => existEquipment);
    }
    function handleCloseEditModal() {
        setShowEditModal(() => false);
    }

    function handleDelete(equipmentId) {
        const newEquipments = Equipments.filter(eq => eq.id !== equipmentId)
        setEquipments(() => newEquipments);
    }
    function handleAdd(theNewEquipment) {
        const newEquipment = theNewEquipment;
        setEquipments((prevEquipments) => [...prevEquipments, newEquipment]);
    }
    function handleEdit(equipmentId, newValues) {
        const updatedProducts = Equipments.map((equipment) => {
            return equipment.id === equipmentId ? { ...equipment, ...newValues } : equipment
        });
        setEquipments(() => updatedProducts);
    }


    return (
        <>
            <AddEquipment onAdd={handleAdd} onClose={handleCloseAddModal} showAddModal={showAddModal} />

            <main className="bg-mainColor">
                <Head />
                <section className="container mx-auto pt-10 pb-10">
                    <h1 className="text-4xl text-center font-semibold mb-10">Farm Equipments</h1>
                    <article className="w-3/4 mx-auto">
                        <button className="px-6 py-2 bg-secondColor text-white rounded-md block ms-auto mb-3" onClick={handleShowModal}>Add Equipment</button>
                        <section className="flex flex-col gap-6 mt-10">
                            {Equipments.map((equip) => {
                                return (
                                    <div key={equip.id} className="bg-[#585ec7a8] rounded-md p-4 text-center xl:text-left xl:flex xl:justify-between xl:items-start">
                                        <div className="xl:flex xl:items-center">
                                            <div className="relative">
                                                <img src={equip.image} alt="equipment" className=" w-32 mx-auto p-3 rounded-full" />
                                                <span className="absolute top-0 left-[-5px] w-8 h-8 p-2 bg-slate-200 rounded-full shadow-md font-bold flex justify-center items-center">{equip.count}</span>
                                            </div>
                                            <div className="p-2">
                                                <h2 className="text-lg font-bold text-white">{equip.title}</h2>
                                                <p className=" text-gray-200">{equip.description}</p>
                                            </div>
                                        </div>
                                        <ul className="flex justify-center gap-5 mt-4">
                                            <li className="rounded-full p-2 cursor-pointer" onClick={() => handleShowEditModal(equip)}><MdEdit className=" text-3xl text-white" /></li>
                                            <li className="rounded-full p-2 cursor-pointer" onClick={() => handleDelete(equip.id)}><MdDelete className=" text-3xl text-white" /></li>
                                        </ul>
                                    </div>)
                            })}
                            {showEditModal && <EditEquipments existEquipment={selectedEquipment} onEdit={handleEdit} onClose={handleCloseEditModal} showEditModal={showEditModal} />}
                        </section>
                    </article>
                </section>
                <Footer />
            </main>
        </>
    )
}
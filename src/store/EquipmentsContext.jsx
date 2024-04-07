// /* eslint-disable react/prop-types */
// import axios from "axios";
// import { createContext, useState } from "react";

// // 901cbc9f-d929-4121-bbd3-84916eac10f4
// export const EquipContext = createContext({
//     getEquipments: () => { },
//     addEquipment: () => { },
//     removeEquipment: () => { },
//     editEquipment: () => { },
// });

// export default function EquipmentsContextProvider({ children }) {
//     const [Equipments, setEquipments] = useState([]);
//     const user = JSON.parse(localStorage.getItem("userData"));

//     function handleEdit(equipmentId, newValues) {
//         const updatedProducts = Equipments.map((equipment) => {
//             return equipment.id === equipmentId
//                 ? { ...equipment, ...newValues }
//                 : equipment;
//         });
//         setEquipments(() => updatedProducts);
//     }

//     const getEquipments = async () => {
//         const response = await fetch(`https://localhost:7289/api/${user.id}/Equipment/Owner?id=${user.id}`);
//         if (!response.ok) {
//             const error = new Error('An error occurred while fetching the equipments');
//             error.code = response.status;
//             error.info = await response.json();
//             throw error;
//         }
//         const data = await response.json();
//         setEquipments(data);
//     }

//     const addEquipment = async (formData) => {
//         let url = `https://localhost:7289/api/${user.id}/Equipment`;
//         const response = await axios.post(url, formData, {
//             headers: {
//                 'Accept': '*/*', // Optional header
//                 'Content-Type': 'multipart/form-data' // Required for FormData
//             }
//         })
//         console.log(response.data);
//     }

//     const removeEquipment = async (equipId) => {
//         let url = `https://localhost:7289/api/${user.id}/Equipment/${equipId}`;
//         const response = await axios.delete(url, {
//             headers: {
//                 'Accept': '*/*', // Optional header
//                 // 'Content-Type': 'multipart/form-data' // Required for FormData
//             }
//         })
//         console.log(response.data);
//     }

//     const editEquipment = async (formData) => {
//         let url = `https://localhost:7289/api/${user.id}/Equipment`;
//         const response = await axios.put(url, formData, {
//             headers: {
//                 'Accept': '*/*', // Optional header
//                 'Content-Type': 'multipart/form-data' // Required for FormData
//             }
//         })
//         console.log(response.data);
//     }

//     return (
//         <EquipContext.Provider value={{ Equipments, handleEdit, getEquipments, addEquipment, removeEquipment, editEquipment }}>
//             {children}
//         </EquipContext.Provider>
//     );
// }
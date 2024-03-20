import { QueryClient } from "@tanstack/react-query";


const user = JSON.parse(localStorage.getItem("userData"));

export const queryClient = new QueryClient();

export const getEquipments = async () => {
    const response = await fetch(`https://localhost:7289/api/${user.id}/Equipment/Owner?id=${user.id}`);
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the equipments');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data;
}

export const addEquipment = async (formData) => {
    let url = `https://localhost:7289/api/${user.id}/Equipment`;
    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the equipments');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
}

export const deleteEquipment = async (equipId) => {
    let url = `https://localhost:7289/api/${user.id}/Equipment/${equipId}`;
    const response = await fetch(url, {
        method: 'DELETE',
    })
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the equipments');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
}

export const editEquipment = async (formData) => {
    let url = `https://localhost:7289/api/${user.id}/Equipment`;
    const response = await fetch(url, {
        method: 'PUT',
        body: formData,
    });
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the equipments');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
}

export const getEquipmentDetails = async ({ id, signal }) => {
    const url = `https://localhost:7289/api/${user.id}/Equipment/${id}`;
    const response = await fetch(url, { signal });
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the equipment details, please try again later.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data;
}
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext } from "react";

export const SubscriptionContext = createContext({
    IsSubscribed: () => { },
    Subscribe: () => { },
    RateExpert: () => { },
    GetRating: () => { },
    CheckOut: () => { },
});

export default function SubscriptionContextProvider({ children }) {
    const IsSubscribed = async (userId) => {
        const response = await fetch(`https://localhost:7289/api/Accounts/IsSubscripted?id=${userId}`);
        if (!response.ok) {
            const error = new Error('An error occurred while checking for subscribe, please try again later.');
            error.code = response.status;
            error.info = await response.json();
            throw error;
        }
        const data = await response.json();
        console.log(data);
        return data;
    }

    const Subscribe = async (userId) => {
        const response = await fetch(`https://localhost:7289/api/Accounts/subscribe?id=${userId}`, {
            method: "PUT",
        });
        if (response.status === 400 || response.status === 404) {
            throw new Error('An error occurred while subscribe, please try again later.');
        }
    }

    const RateExpert = async (data) => {
        const response = await fetch(`https://localhost:7289/api/Accounts/farmOwner/setDoctorRating`, {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('An error occurred while sending the expert rate, please try again');
        }
    }

    const GetRating = async ({ signal, expertId }) => {
        const response = await fetch(`https://localhost:7289/api/Accounts/doctor/CalcRating/${expertId}`, { signal });
        if (!response.ok) {
            const error = new Error('An error occurred while getting the rating of expert');
            error.code = response.status;
            error.info = await response.json();
            throw error;
        }
        const rating = await response.json();
        return rating;
    }

    const CheckOut = async (ownerId) => {
        axios.post(`https://localhost:7289/api/Accounts/create-checkout-session?ownerId=${ownerId}`)
            .then((response) => {
                console.log(response.data);
                window.location.href = response.data;
            }).catch((error) => {
                console.log(error);
            })
    }


    return (
        <SubscriptionContext.Provider value={{ IsSubscribed, Subscribe, RateExpert, GetRating, CheckOut }}>
            {children}
        </SubscriptionContext.Provider>
    );
}
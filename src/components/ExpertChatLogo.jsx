/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"

export default function ExpertChatLogo({ experts }) {
    const { id } = useParams();
    const selectedExpert = experts.find((expert) => expert.id === id);


    return (
        <>
            <img src={selectedExpert.personalPhoto} alt="ChatBot" className=" w-12 p-2 rounded-full" />
            <div>
                <h1 className="font-semibold">{selectedExpert.userName}</h1>
            </div>
        </>
    )
}
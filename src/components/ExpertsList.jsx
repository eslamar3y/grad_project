/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CardSlider from "./CardSlider";


export default function ExpertsList({ doctors }) {
    return (
        <CardSlider>
            {
                doctors.map(doctor => {
                    return (
                        <NavLink to={`expert/${doctor.id}`} key={doctor.id}>
                            <div className="p-4">
                                <img
                                    className="bg-mainColor w-full object-contain h-60"
                                    src={doctor.personalPhoto}
                                    alt="disease-image"
                                />
                                <p className="bg-slate-100 w-full py-3 text-center mx-auto rounded-b-md font-semibold">
                                    Dr. {doctor.userName}
                                </p>
                            </div>
                        </NavLink>
                    )
                })
            }
        </CardSlider>
    )
}
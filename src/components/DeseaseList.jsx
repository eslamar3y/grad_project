/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import CardSlider from './CardSlider';

export default function DeseaseList({ diseases }) {
    return (
        <CardSlider>
            {
                diseases.map(disease => {
                    return (
                        <NavLink key={disease.id} to={`disease/${disease.id}`}>
                            <div className="p-4">
                                <img
                                    className="w-full h-60"
                                    src={disease.photoPath}
                                    alt="disease-image"
                                />
                                <p className="font-semibold bg-slate-100 p-3 text-center rounded-b-md relative bottom-4">
                                    {disease.name}
                                </p>
                            </div>
                        </NavLink>
                    )
                })
            }
        </CardSlider>
    );
}

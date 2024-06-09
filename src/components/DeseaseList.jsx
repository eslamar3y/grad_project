/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import CardSlider from './CardSlider';

export default function DeseaseList({ diseases }) {
    console.log(diseases);
    return (
        <CardSlider>
            {
                diseases.map(disease => {
                    return (
                        <NavLink key={disease.id} to={`disease/${disease.id}`}>
                            <div className="p-4">
                                <img
                                    className="w-full h-56 rounded-md"
                                    src={disease.photoPath}
                                    alt="disease-image"
                                />
                                <div className=' bg-slate-100 p-3 rounded-b-md relative bottom-4'>
                                    <h2 className="font-semibold text-xl mb-2">
                                        {disease.name}
                                    </h2>
                                    {/* <p className=' text-sm'>{disease.description}</p> */}
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </CardSlider>
    );
}

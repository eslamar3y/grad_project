import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function ChatList({ doctors }) {
    return (
        <ul className="pt-10">
            {
                doctors.map(doc => {
                    return (
                        <Link to={doc.id} key={doc.id}>
                            <li className="flex gap-2 py-3 px-2 border-b-2 cursor-pointer rounded transition duration-300 lg:flex-row hover:bg-gray-200">
                                <img src={doc.personalPhoto} alt="doc-photo" className=" w-10 h-10 rounded-full" />
                                <h2>{doc.userName}</h2>
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}
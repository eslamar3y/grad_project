import Head from "../../components/SimpleNav";
import equip1 from "../../assets/equip1.png";
import equip2 from "../../assets/equip2.png";
import equip3 from "../../assets/equip3.png";
import equip4 from "../../assets/equip4.png";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


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
    return (
        <main className="bg-mainColor">
            <Head />
            <section className="container mx-auto px-4 pt-10 pb-10">
                <h1 className="text-4xl text-center font-semibold mb-10">Farm Equipments</h1>
                <article>
                    <button className="px-6 py-2 bg-secondColor text-white rounded-md block ms-auto mb-3">Add Equipment</button>
                    <section className="flex flex-col gap-6">
                        {equipments.map((equip) => {
                            return (
                                <div key={equip.id} className="bg-[#585ec7a8] rounded-md p-4 text-center xl:text-left xl:flex xl:justify-between xl:items-start">
                                    <div className="xl:flex xl:items-center">
                                        <div className="relative">
                                            <img src={equip.image} alt="equipment" className=" w-52 mx-auto p-3" />
                                            <span className="absolute top-0 w-8 h-8 p-2 bg-slate-200 rounded-full shadow-md font-bold flex justify-center items-center">{equip.count}</span>
                                        </div>
                                        <div className="p-2">
                                            <h2 className="text-lg font-bold text-white">{equip.title}</h2>
                                            <p className=" text-gray-200">{equip.description}</p>
                                        </div>
                                    </div>
                                    <ul className="flex justify-center gap-5 mt-4">
                                        <li className=" bg-blue-400 rounded-full p-2 cursor-pointer"><MdEdit className=" text-3xl text-white" /></li>
                                        <li className=" bg-red-400 rounded-full p-2 cursor-pointer"><MdDelete className=" text-3xl text-white" /></li>
                                    </ul>
                                </div>
                            )
                        })}
                    </section>
                </article>
            </section>
            {/* <Footer /> */}
        </main>
    )
}
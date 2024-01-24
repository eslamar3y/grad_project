// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { useRef, useState } from 'react';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';
import CardSlider from "./CardSlider";


export default function Experts() {
    const diseaseData = [
        { id: 1, image: doc1 },
        { id: 2, image: doc2 },
        { id: 3, image: doc3 },
        { id: 4, image: doc4 },
        { id: 5, image: doc5 },
    ];

    // const scrollRef = useRef();
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const AmountOfPosition = 250;
    // const handelScroll = (amount) => {
    //     let newPosition = scrollPosition + amount;
    //     if (newPosition >= 0) {
    //         setScrollPosition(() => newPosition);
    //         scrollRef.current.scrollLeft = newPosition;
    //         console.log(newPosition);
    //         console.log(scrollRef.current);
    //     }
    // }


    return (
        <section className="pb-8 pt-8">
            <h1 className="text-center font-bold text-[42px]">Experts</h1>
            <div className=" bg-[#8488CD] mt-40">
                {/* <section className='flex mt-20 mb-20 relative rounded-xl bottom-32'>
                    <button onClick={() => handelScroll(-AmountOfPosition)} className='bg-tranparent px-2 xl:px-3 text-white text-2xl relative left-0'><FaArrowLeft /></button>
                    <div className="flex py-4 mx-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" ref={scrollRef}>
                        {diseaseData.map((disease) => {
                            return (
                                <div className="min-w-[350px] p-4" key={disease.id}>
                                    <img className="w-full object-contain h-60" src={disease.image} alt="disease-image" />
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={() => handelScroll(AmountOfPosition)} className='bg-tranparent px-2 xl:px-3 text-white text-2xl relative right-0'><FaArrowRight /></button>
                </section> */}
                <section className="relative bottom-32 mt-20 mb-20">
                    <CardSlider>
                        {diseaseData.map((disease) => {
                            return (
                                <div className="p-4" key={disease.id}>
                                    <img className="w-full object-contain h-60" src={disease.image} alt="disease-image" />
                                </div>
                            )
                        })}
                    </CardSlider>
                </section>
            </div>
        </section>
    )
}
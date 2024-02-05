import deseas1 from '../assets/d1.png';
import deseas2 from '../assets/d2.png';
import deseas3 from '../assets/d3.png';
import deseas4 from '../assets/d4.png';
import deseas5 from '../assets/d5.png';
import deseas6 from '../assets/d6.png';
import deseas7 from '../assets/d0.png';
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { useRef, useState } from 'react';
import chartImg from '../assets/Chart-container.png';
import CardSlider from './CardSlider';


export default function FishDiseases() {
    const diseaseData = [
        { id: 1, name: 'Parasitic diseases', image: deseas1 },
        { id: 2, name: 'Parasitic diseases', image: deseas2 },
        { id: 3, name: 'Parasitic diseases', image: deseas3 },
        { id: 4, name: 'Parasitic diseases', image: deseas4 },
        { id: 5, name: 'Parasitic diseases', image: deseas5 },
        { id: 6, name: 'Parasitic diseases', image: deseas6 },
        { id: 7, name: 'Parasitic diseases', image: deseas7 },
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
    // border-y-8 border-y-secondColor
    return (
        <main className=" bg-mainColor pt-16 pb-16">
            <h1 className="font-bold text-[42px] text-center">Fish Diseases</h1>
            {/* <section className='flex mt-20 mb-20 relative rounded-xl'>
                <button onClick={() => handelScroll(-AmountOfPosition)} className='bg-tranparent px-2 xl:px-3 text-white text-2xl relative left-0'><FaArrowLeft /></button>
                <div className="flex py-4 mx-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" ref={scrollRef}>
                    {diseaseData.map((disease) => {
                        return (
                            <div className="p-4" key={disease.id}>
                                <img className="min-w-[300px] h-60" src={disease.image} alt="disease-image" />
                                <h2 className='text-center font-bold p-3'>{disease.name}</h2>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => handelScroll(AmountOfPosition)} className='bg-tranparent px-2 xl:px-3 text-white text-2xl relative right-0'><FaArrowRight /></button>
            </section> */}
            <section className='w-full mt-20 mb-20'>
                <CardSlider>
                    {diseaseData.map((disease) => {
                        return (
                            <div className="p-4" key={disease.id}>
                                <img className="w-full h-60" src={disease.image} alt="disease-image" />
                                <p className='font-semibold bg-slate-100 p-3 text-center rounded-b-md relative bottom-4'>{disease.name}</p>
                            </div>
                        )
                    })}
                </CardSlider>
            </section>
            {/* <section className='container mb-8 px-8 mx-auto text-center flex flex-col gap-10 xl:text-left xl:flex-row xl:justify-between xl:items-center'>
                <div>
                    <h2 className='text-[24] font-bold mb-2 capitalize'>Bacterial Red disease (Aeromoniasis) :</h2>
                    <p className='text-[18] text-left'>
                        The genus Aeromonas comprises some of the most important fish bacterial pathogens that affect
                        aquaculture worldwide. Several species other than A. salmonicida, the causative agent of
                        furunculosis in salmonids have been responsible for severe losses both in freshwater and marine aquaculture.
                        Aeromonads have a big repertoire of virulence factors that contribute to their pathogenicity. In this chapter,
                        we review the recent developments in the study of those virulence factors,
                        and we describe the pathologies caused in fish focusing on the Mediterranean aquaculture.
                    </p>
                </div>
                <img className='w-[220px] mt-3 mx-auto xl:mx-0 xl:mt-0' src={deseas1} alt="fish" />
            </section> */}
            <section className='container mx-auto px-8'>
                <h2 className=' text-[#94A3B8] font-bold'>Title</h2>
                <span className='block w-[15%] h-[0.5px] bg-[#475569]'></span>
                <div className='chart flex flex-col p-5 xl:flex-row xl:gap-52 xl:items-center'>
                    <ul className='list-disc'>
                        <li className=' marker:text-[#1E40AF] marker:text-2xl'>1st week</li>
                        <li className=' marker:text-[#3B82F6] marker:text-2xl'>2nd week</li>
                        <li className=' marker:text-[#60A5FA] marker:text-2xl'>3rd week</li>
                    </ul>
                    <img className='w-[135px] mx-auto xl:mx-0' src={chartImg} alt="chart" />
                </div>
            </section>
            <button className="block mx-auto rounded-[24px] bg-secondColor text-white px-10 py-4 text-[20px] font-bold mt-10 shadow-custom capitalize">Detailed information</button>
        </main>
    )
}
import Head from "./Head";
import './Landing.css';
import landFish from "../assets/land_fish.png";

export default function Landing() {
    return (
        <div className="land overflow-x-hidden relative">
            <svg className='curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1079" fill="none">
                <path d="M1030.83 562.882C762.338 880.386 452.447 1079.46 0.999817 1079.5C1.02721 748.019 7.01661 316.034 -0.00052968 -0.000230692C322.962 -0.026949 1965.5 -17.4998 1965.5 -17.4998C1965.5 -17.4998 1324.31 215.834 1030.83 562.882Z" fill="#D9D9D9" />
            </svg>
            <div className="container land-container absolute">
                <Head />
                <main className="xl:flex xl:justify-between">
                    <section className="w-full text-center xl:w-[600px] xl:text-left mt-52">
                        <h1 className="text-[30px] xl:text-[74px] font-bold">Early detection, lifelong wellness.</h1>
                        <p className="text-[20px] xl:text-[24px] mb-[39px] mt-[8px]">Dive into our Fish Disease WebSite.</p>
                        <button className="btn-detect text-[24px] w-[289px] py-[10px] px-[16px] rounded-[24px] bg-[#585EC7] text-white">Detect</button>
                    </section>
                    <section className="mt-40">
                        <img className="hidden xl:block xl:w-[884px] xl:h-[593px]" src={landFish} alt="fish-land-page" />
                    </section>
                </main>
            </div>
        </div>
    )
}
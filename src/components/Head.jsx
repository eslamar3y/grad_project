import Logo from '../assets/siteLogo.png';
import './Head.css'
import { FaBars } from "react-icons/fa";

export default function Head() {
    return (
        <div className='max-xl:flex max-xl:justify-between max-xl:p-3'>
            <div className="flex flex-col items-center xl:flex-row xl:justify-between">
                <img src={Logo} alt="logo" className="" />
                <ul className='menu max-xl:absolute max-xl:bg-white max-xl:top-11 max-xl:left-0 max-xl:w-full max-xl:p-5 max-xl:flex max-xl:flex-col max-xl:gap-10 max-xl:rounded-md xl:flex xl:static xl:gap-[33px]'>
                    <li className='active'>Home</li>
                    <li>Disease Detection</li>
                    <li>Farm Equipments</li>
                    <li>Fish Information</li>
                    <li>Doctors</li>
                    <li>About</li>
                    <li>Q&A, Chat</li>
                </ul>
                <button className='mt-5 btn-signin w-[158px] h-[48px] border border-black rounded-2xl bg-mainColor xl:mt-0'>Signin</button>
            </div>
            <button className=' flex align-top xl:hidden'><FaBars className='text-2xl' /></button>
        </div>
    )
}
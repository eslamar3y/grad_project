import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const NavLinks = () => {
    return (
        <>
            <NavLink to='/' className={({ isActive }) => (isActive ? ' font-bold text-lg' : '')}>Home</NavLink>
            <NavLink to='/detection' className={({ isActive }) => (isActive ? ' font-bold text-xl' : '')}>Disease Detection</NavLink>
            <NavLink to='equipments' className={({ isActive }) => (isActive ? ' font-bold text-xl' : '')}>Farm Equipments</NavLink>
            <NavLink to='fishInfo' className={({ isActive }) => (isActive ? ' font-bold text-xl' : '')}>Fish Information</NavLink>
            <NavLink to='doctors' className={({ isActive }) => (isActive ? ' font-bold text-xl' : '')}>Doctors</NavLink>
            <NavLink to='about' className={({ isActive }) => (isActive ? ' font-bold text-xl' : '')}>About</NavLink>
            <NavLink to='chat' className={({ isActive }) => (isActive ? ' font-bold text-xl' : '')}>Q&A, Chat</NavLink>
        </>
    )
}


export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu((prev) => !prev);
    }


    return (
        <>
            <nav>
                <div className="hidden 2xl:flex 2xl:gap-6 2xl:items-center">
                    <NavLinks />
                </div>
                <button className=' flex align-top 2xl:hidden'><FaBars className='text-2xl' onClick={handleShowMenu} /></button>
            </nav>
            {showMenu &&
                <menu className="flex flex-col w-full h-[610px] gap-5 mt-5 bg-white p-4 rounded-lg absolute top-5 right-0">
                    <button className='mt-5 shadow-custom w-[158px] h-[48px] border-black bg-secondColor text-white rounded-2xl'>Signin</button>
                    <NavLinks />
                </menu>
            }
        </>
    )
}
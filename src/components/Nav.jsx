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
                <div className="hidden xl:flex xl:gap-6 xl:items-center">
                    <NavLinks />
                </div>
                <button className=' flex align-top xl:hidden'><FaBars className='text-2xl' onClick={handleShowMenu} /></button>
            </nav>
            {showMenu &&
                <menu className="flex flex-col basis-full gap-5 mt-5 bg-white p-4 rounded-lg">
                    <NavLinks />
                </menu>
            }
        </>
    )
}
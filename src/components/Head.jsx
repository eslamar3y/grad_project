import { NavLink } from 'react-router-dom';
import Logo from '../assets/siteLogo.png';
import './Head.css'
import Nav from './Nav';

export default function Head() {
    return (
        <header className="sticky top-5 z-20 px-5 py-4 2xl:flex 2xl:justify-between 2xl:items-center 2xl:px-8">
            <div className='flex justify-between items-center flex-wrap'>
                <img className='2xl:me-24' src={Logo} alt="logo" />
                <Nav />
            </div>
            <NavLink to='login'>
                <button className='hidden mt-5 shadow-custom w-[158px] h-[48px] border-black bg-mainColor rounded-2xl 2xl:block 2xl:mt-0'>Signin</button>
            </NavLink>
        </header>
    )
}
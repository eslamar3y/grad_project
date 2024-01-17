import Logo from '../assets/siteLogo.png';
import './Head.css'
import Nav from './Nav';

export default function Head() {
    return (
        <header className='xl:flex xl:justify-between xl:items-center'>
            <div className='flex justify-between items-center flex-wrap'>
                <img className='xl:me-24' src={Logo} alt="logo" />
                <Nav />
            </div>
            <button className='mt-5 block btn-signin w-[158px] h-[48px] border border-black rounded-2xl bg-mainColor xl:mt-0'>Signin</button>
        </header>
    )
}
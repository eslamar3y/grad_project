import footerImg from '../assets/footer.png';
import logo from '../assets/siteLogo.png';
import googlePlay from '../assets/google-play.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="w-full overflow-x-hidden pt-96">
            <div className="min-h-[600px] bg-secondColor rounded-t-[50%] me-[-400px] ms-[-400px] p-6">
                <div className="container mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center">
                    <section className='bg-[#F0EDED] p-7 rounded-lg relative bottom-20 w-[350px] mx-auto xl:mx-0 xl:w-[400px]'>
                        <form action="" className='flex flex-col gap-4'>
                            <input type="text" name="userName" id="userName" placeholder='Name' className='border p-2 rounded outline-none' />
                            <input type="email" name="userMail" id="userMail" placeholder='Email' className='border p-2 rounded outline-none' />
                            <input type="number" name="userPhone" id="userPhone" placeholder='Phone Number' className='border p-2 rounded outline-none' />
                            <textarea name="message" id="message" cols="30" rows="6" placeholder='Message' className='border p-2 rounded resize-none outline-none'></textarea>
                            <div className="group-input flex gap-2">
                                <input type="checkbox" name="accept" id="accept" />
                                <label htmlFor="accept" className='text-sm font-semibold'>I have read and accept the privacy policy.</label>
                            </div>
                            <button className=' bg-secondColor px-8 py-3 text-white rounded-md'>Send Message</button>
                        </form>
                    </section>
                    <section className='flex flex-col items-center gap-10'>
                        <img className='w-[201px]' src={logo} alt="Logo" />
                        <p className=' text-sm'>© 2023 FishShield. All Rights Reserved.</p>
                        <ul className='flex gap-5'>
                            <li className='w-[50px] h-[50px] border border-slate-400 rounded-xl text-white flex justify-center items-center'>
                                <FaFacebookF className='text-2xl' />
                            </li>
                            <li className='w-[50px] h-[50px] border border-slate-400 rounded-xl text-white flex justify-center items-center'>
                                <FaLinkedinIn className='text-2xl' />
                            </li>
                            <li className='w-[50px] h-[50px] border border-slate-400 rounded-xl text-white flex justify-center items-center'>
                                <FaTwitter className='text-2xl' />
                            </li>
                        </ul>
                    </section>
                    <section className='relative mx-auto xl:mx-0 xl:bottom-32 '>
                        {/* <div className='p-2 rounded-full bg-[#ffffff17]'> */}
                        <img className=' hidden xl:block w-[300px] h-[300px] mx-auto object-contain p-5 border-transparent m-5 rounded-full shadow-blur' src={footerImg} alt="footer image" />
                        {/* </div> */}
                        <div className='flex flex-col md:flex-row gap-8 mt-20'>
                            <div className='flex gap-4 items-center bg-white px-8 py-4 rounded-2xl'>
                                <FaApple className='text-4xl' />
                                <div>
                                    <p className='text-sm'>Download on the</p>
                                    <h2 className='font-bold'>App Store</h2>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center bg-white px-8 py-4 rounded-2xl'>
                                <img src={googlePlay} alt="google play" />
                                <div>
                                    <p className='text-sm'>Download on the</p>
                                    <h2 className='font-bold'>App Store</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}
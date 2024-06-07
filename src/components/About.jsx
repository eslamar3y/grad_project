import about from '../assets/about.png';

export default function About() {
    return (
        <section className="container pb-8 pt-8 px-8 mx-auto" id='about'>
            <h1 className="text-center font-bold text-[42px]">About Us</h1>
            <div className='flex gap-8 flex-col xl:flex-row mt-20'>
                <img className='w-full' src={about} alt="about image" />
                <div className='bg-secondColor text-center p-10 rounded-3xl'>
                    <h2 className='font-bold text-[36px] mb-8 capitalize'>about us</h2>
                    <p className='text-white text-[24px] text-left'>
                        Our innovative application revolutionizes fish farming
                        by leveraging advanced disease detection
                        technologies to identify infections at early stages,
                        providing detailed disease information and periodic follow-ups for four major diseases,
                        facilitating real-time communication with specialists through chat and chatbot services,
                        and offering a comprehensive web and mobile platform with an admin dashboard for farm owners and specialists,
                        ultimately saving time, reducing costs, and promoting healthier fish populations.
                    </p>
                    {/* <button className='mt-8 shadow-custom w-[158px] h-[48px] border border-black rounded-2xl bg-mainColor'>
                        <Link to="/about">Know More</Link>
                    </button> */}
                </div>
            </div>
        </section>
    )
}
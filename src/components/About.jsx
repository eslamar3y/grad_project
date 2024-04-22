import about from '../assets/about.png';

export default function About() {
    return (
        <section className="container pb-8 pt-8 px-8 mx-auto">
            <h1 className="text-center font-bold text-[42px]">About Us</h1>
            <div className='flex gap-8 flex-col xl:flex-row mt-20'>
                <img className='w-full' src={about} alt="about image" />
                <div className='bg-secondColor text-center p-10 rounded-3xl'>
                    <h2 className='font-bold text-[36px] mb-8 capitalize'>about us</h2>
                    <p className='text-white text-[24px] text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque quis hendrerit urna.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vestibulum nisi diam, scelerisque maximus massa rhoncus a. Fusce sollicitudin efficitur lectus.
                        Nunc mauris diam,
                        ultricies et molestie non, viverra vel enim.
                    </p>
                    <button className='mt-8 shadow-custom w-[158px] h-[48px] border border-black rounded-2xl bg-mainColor'>Know More</button>
                </div>
            </div>
        </section>
    )
}
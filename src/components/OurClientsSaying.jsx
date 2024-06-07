import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideOpinions = [
    {
        opinion: "This application has been a game-changer for our fish farming operations, allowing us to detect and address diseases early, saving us both time and money."
    },
    {
        opinion: "The ability to chat with specialists in real-time has provided us with invaluable insights and timely advice, helping us maintain the health of our fish stocks."
    },
    {
        opinion: "Thanks to the comprehensive disease information and periodic follow-ups, we have significantly reduced the spread of infections and improved the overall health of our fish population."
    },
];

export default function OurClientsSaying() {
    return (
        <section className=' container pt-8 mx-auto px-0 xl:px-8 mt-8'>
            <h1 className='text-center font-bold text-[42px] capitalize'>What Our Clients Are Saying</h1>
            <div className="slide-container w-[85%] mx-auto">
                <Slide>
                    {slideOpinions.map((slide, index) => (
                        <div key={index}>
                            <div className='p-14'>
                                <p>{slide.opinion}</p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    )
}



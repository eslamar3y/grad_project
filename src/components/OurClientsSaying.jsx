import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideOpinions = [
    {
        opinion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum nisi diam, scelerisque maximus massa rhoncus a. Fusce sollicitudin efficitur lectus. Nunc mauris diam, ultricies et molestie non, viverra vel enim."
    },
    {
        opinion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum nisi diam, scelerisque maximus massa rhoncus a. Fusce sollicitudin efficitur lectus. Nunc mauris diam, ultricies et molestie non, viverra vel enim."
    },
    {
        opinion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum nisi diam, scelerisque maximus massa rhoncus a. Fusce sollicitudin efficitur lectus. Nunc mauris diam, ultricies et molestie non, viverra vel enim."
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



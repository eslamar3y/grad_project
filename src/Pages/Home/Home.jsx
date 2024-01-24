import About from '../../components/About';
import Experts from '../../components/Experts';
import FishDiseases from '../../components/FishDiseases';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';
import OurClientsSaying from '../../components/OurClientsSaying';


export default function Home() {
    return (
        <div className="home-back min-h-screen bg-mainColor">
            <Landing />
            <FishDiseases />
            <Experts />
            <About />
            <OurClientsSaying />
            <Footer />
        </div>
    )
}
import FishDiseases from '../../components/FishDiseases';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';


export default function Home() {
    return (
        <div className="home-back min-h-screen bg-mainColor">
            <Landing />
            <FishDiseases />
            <Footer />
        </div>
    )
}
import FishDiseases from '../../components/FishDiseases';
import Landing from '../../components/Landing';


export default function Home() {
    return (
        <div className="home-back min-h-screen">
            <Landing />
            <FishDiseases />
        </div>
    )
}
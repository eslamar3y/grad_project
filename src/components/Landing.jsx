import Head from "./Head";
import classes from './Landing.module.css';
import landFish from "../assets/land_fish.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { SubscriptionContext } from "../store/SubscriptionContext";

export default function Landing() {
    const { userLogin } = useContext(AuthContext);
    const { IsSubscribed } = useContext(SubscriptionContext);
    const [isSubscribe, setIsSubscribe] = useState(false);
    useEffect(() => {
        const checkSubscription = async () => {
            if (userLogin) {
                const isSub = await IsSubscribed(userLogin.id);
                setIsSubscribe(() => isSub);
                return isSub;
            }
            return;
        }
        checkSubscription();
    }, [IsSubscribed, userLogin?.id, userLogin]);
    console.log(isSubscribe)
    console.log(userLogin)


    let detectLink;
    if (userLogin && isSubscribe == true) {
        detectLink = <Link to='/detection' className="block mx-auto text-center shadow-custom text-[24px] w-[289px] py-[10px] px-[16px] rounded-[24px] bg-secondColor text-white xl:mx-0">Detect</Link>;
    }
    else if (userLogin && isSubscribe == false) {
        detectLink = <Link to='/subscribe' className="block mx-auto text-center shadow-custom text-[24px] w-[289px] py-[10px] px-[16px] rounded-[24px] bg-secondColor text-white xl:mx-0">Detect</Link>;
    }
    else {
        detectLink = <Link to='/login' className="block mx-auto text-center shadow-custom text-[24px] w-[289px] py-[10px] px-[16px] rounded-[24px] bg-secondColor text-white xl:mx-0">Detect</Link>;
    }


    return (
        <div className="h-screen bg-secondColor relative overflow-x-hidden">
            <svg className={classes.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1079" fill="none">
                <path d="M1030.83 562.882C762.338 880.386 452.447 1079.46 0.999817 1079.5C1.02721 748.019 7.01661 316.034 -0.00052968 -0.000230692C322.962 -0.026949 1965.5 -17.4998 1965.5 -17.4998C1965.5 -17.4998 1324.31 215.834 1030.83 562.882Z" fill="#D9D9D9" />
            </svg>
            <Head />
            <div className="container mx-auto">
                <main className="px-5 xl:flex xl:justify-evenly xl:items-center mt-28 relative z-10">
                    <section className="w-full text-center xl:w-[600px] xl:text-left">
                        <h1 className="text-[30px] xl:text-[50px] font-bold capitalize">Early detection, lifelong wellness.</h1>
                        <p className="text-[20px] xl:text-[24px] mb-[39px] mt-[8px] capitalize">Dive into our Fish Disease WebSite.</p>
                        {/* <Link to='/detection' className="block mx-auto text-center shadow-custom text-[24px] w-[289px] py-[10px] px-[16px] rounded-[24px] bg-secondColor text-white xl:mx-0">Detect</Link> */}
                        {detectLink}
                    </section>
                    <section>
                        <img className="hidden xl:block xl:w-[500px]" src={landFish} alt="fish-land-page" />
                    </section>
                </main>
            </div>
        </div>
    )
}
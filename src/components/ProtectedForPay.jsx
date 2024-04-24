/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";


export default function ProtectedForPay({ children, path }) {
    const { userLogin } = useContext(AuthContext);
    const { IsSubscribed } = useContext(AuthContext);
    const [isSubscribe, setIsSubscribe] = useState(true);
    useEffect(() => {
        const checkSubscription = async () => {
            const isSub = await IsSubscribed(userLogin.id);
            setIsSubscribe(() => isSub);
            return isSub;
        }
        checkSubscription();
    }, [IsSubscribed, userLogin.id]);
    console.log(isSubscribe);


    let content;
    if (userLogin && isSubscribe == true) {
        content = children;
    }
    else if (userLogin && isSubscribe == false) {
        content = <Navigate to="/subscribe" />;
    }
    else {
        content = <Navigate to={path} />;
    }


    return (
        <>
            {content}
        </>
    )
}
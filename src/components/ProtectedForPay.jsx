/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { SubscriptionContext } from "../store/SubscriptionContext";
import { Navigate } from "react-router-dom";


export default function ProtectedForPay({ children, path }) {
    const { userLogin } = useContext(AuthContext);
    const { IsSubscribed } = useContext(SubscriptionContext);
    const [isSubscribe, setIsSubscribe] = useState(true);

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
    }, [IsSubscribed, userLogin.id, userLogin]);
    console.log(isSubscribe);


    let content;
    if ((userLogin && isSubscribe == true) || userLogin?.role == "Doctor") {
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
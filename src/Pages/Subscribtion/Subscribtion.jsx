import { useContext, useState } from "react";
// import payImg from "../../assets/subscribe.jpg";
import Footer from "../../components/Footer";
import Head from "../../components/SimpleNav";
import subscriptionImg from "../../assets/Subscriber-img2png.png"
import { AuthContext } from "../../store/AuthContext";
import { SubscriptionContext } from "../../store/SubscriptionContext";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";


const Subscribtion = () => {
    const { CheckOut } = useContext(SubscriptionContext);
    const { userLogin } = useContext(AuthContext);
    // const [subscribeError, setSubscribeError] = useState();
    // const navigate = useNavigate();

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     setSubscribeError(null);
    //     try {
    //         await Subscribe(userLogin.id);
    //         console.log("Subscribed");
    //         Swal.fire({
    //             title: "Good job!",
    //             text: "You have successfully subscribed, You have 3 free attempts during the trial period, after that $18 will be deducted from the subscription price",
    //             icon: "success"
    //         });
    //         navigate("/")
    //     }
    //     catch (err) {
    //         console.log("jlk");
    //         setSubscribeError("Thier is an error with payment please try again later.");
    //     }
    // }

    const { mutate } = useMutation({
        mutationFn: CheckOut
    })


    return (
        <main className="bg-mainColor">
            <Head />
            {/* <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
                {subscribeError && <p className="my-2 text-center text-red-600 font-semibold">*{subscribeError}</p>}
                <div className="mb-4">
                    <img
                        src={payImg}
                        alt="Payment Header"
                        className="w-full h-auto mb-4 rounded-md"
                    />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-gray-700">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter card number (e.g., 1234 5678 9012 3456)"
                            pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardName" className="block text-gray-700">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            id="cardName"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter cardholder name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="expiryDate" className="block text-gray-700">
                            Expiration Date
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            className="w-full p-2 border rounded-md"
                            placeholder="MM / YY"
                            pattern="(0[1-9]|1[0-2]) \/ [0-9]{2}"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cvv" className="block text-gray-700">
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter CVV"
                            pattern="[0-9]{3}"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-secondColor text-white py-2 rounded-md hover:bg-[#01626c]">
                        Pay Now
                    </button>
                </form>
            </div> */}
            <main className="flex flex-col gap-8 mt-10 xl:mt-20 items-center lg:flex-row lg:justify-around">
                <section>
                    <img src={subscriptionImg} className=" w-96" alt="subscriptionImg" />
                </section>
                <article className="flex flex-col w-[24rem] md:w-[32rem] gap-6">
                    <h1 className="text-xl font-semibold">“Unlock exclusive access to our Chat with Specialists service and gain insights that can boost your profits while staying informed about the latest advancements in disease detection. Subscribe today!”</h1>
                    <button onClick={() => mutate(userLogin.id)} className="block mx-auto text-center shadow-custom text-[24px] w-[250px] py-[10px] px-[10px] rounded-xl bg-secondColor text-white xl:mx-0">Subscribe now</button>
                </article>
            </main>
            <Footer />
        </main>
    );
};

export default Subscribtion;

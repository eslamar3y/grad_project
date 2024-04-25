/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import Modal from "./Modal";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { SubscriptionContext } from "../store/SubscriptionContext";


export default function ExpertRating({ showRating, onCloseRating, getIds }) {
    const [rateValue, setRateValue] = useState(0);
    const { RateExpert } = useContext(SubscriptionContext);

    async function handleRate() {
        const ids = getIds();
        let rate = rateValue;
        const Data = { ...ids, rate };
        console.log("data", Data);
        try {
            await RateExpert(Data);
            onCloseRating();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Modal method="POST" open={showRating} onClose={onCloseRating}>
            <div className="px-6 py-6 rounded-2xl bg-mainColor relative">
                <IoClose onClick={onCloseRating} className=" absolute top-3 right-3 text-xl cursor-pointer hover:text-2xl transition-all duration-200" />
                <div className="flex flex-col items-center">
                    <h2 className=" font-popins font-semibold mb-2 text-xl">Expert Rating</h2>
                    <Rating size="large" name="half-rating" value={rateValue} precision={0.5} className="my-6" onChange={(event, newValue) => setRateValue(newValue)} />
                    <button onClick={handleRate} className="bg-secondColor text-white px-4 py-1 shadow rounded hover:bg-[#01707c] transition-all duration-300 font-semibold">Save</button>
                </div>
            </div>
        </Modal>
    )
}
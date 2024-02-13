// import { BsSearch } from "react-icons/bs";
// import { FaPhoneAlt } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { FaBars } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import chat from "../../assets/chat-bot.png";
import styles from "./ChatBot.module.css";
import { Link } from "react-router-dom";


export default function ChatBot() {
    return (
        <main className="min-h-svh bg-[#585dc7da] bg-chatBot flex">
            {/* <aside className="w-20 lg:w-[300px] min-h-svh bg-mainColor relative border-r-2 px-5 py-4">
                <FaBars className="text-2xl cursor-pointer" />
            </aside> */}
            <section className="w-full">
                <header className="flex justify-between bg-mainColor px-6 py-2">
                    <div className="flex gap-4 items-center">
                        <img src={chat} alt="ChatBot" className=" w-12 p-2 rounded-full" />
                        <div>
                            <h1 className=" font-semibold">Doc Bot</h1>
                            <p className="text-xs text-gray-500">Online for 10 mins</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <Link to="/">
                            <MdHome className="text-gray-600 text-2xl cursor-pointer" />
                        </Link>
                        {/* <BsSearch className="text-gray-600" />
                        <FaPhoneAlt className="text-gray-600" />
                        <BsThreeDotsVertical className="text-gray-800" /> */}
                    </div>
                </header>
                <article className={styles['chat-section']}></article>
                <section className="bg-mainColor px-4 py-3 flex items-center gap-4">
                    {/* <IoMdAddCircleOutline className="text-gray-400 text-4xl" /> */}
                    <input type="text" name="chat-text" id="chat-text" className="w-full p-3 rounded-xl shadow-inner" placeholder="Type Your Message" />
                    <IoSend className=" text-4xl text-white p-2 bg-gray-400 rounded-full" />
                </section>
            </section>
        </main>
    )
}
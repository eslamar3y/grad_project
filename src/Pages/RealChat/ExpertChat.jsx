import { FaUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useRef, useState } from "react";
import chat from "../../assets/chat-bot.png";
import styles from "./RealChat.module.css";


export default function ExpertChat() {
    const inputRef = useRef();
    const [messages, setMessages] = useState([]);

    async function handleSend() {
        const newMessage = {
            message: inputRef.current.value,
            sender: 'user',
        }
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        inputRef.current.value = '';
    }


    return (
        <>
            <article className={`${styles['chat-section']} p-4`}>
                {messages.map((message, i) => {
                    let isBot = message.sender === "ChatGPT";
                    return (
                        <div key={i} className="p-4 m-2 rounded bg-mainColor/60 my-3 flex items-start">
                            {
                                isBot ?
                                    <img src={chat} alt="ChatBot" className=" w-10 p-2 rounded-full" /> :
                                    <FaUserCircle className=" text-2xl text-secondColor/90 block m-2" />
                            }
                            <p className="mt-3">{message.message}</p>
                        </div>
                    )
                })}
            </article>
            <section className="bg-mainColor px-4 py-3 flex items-center gap-4">
                <input
                    type="text"
                    name="chat-text"
                    id="chat-text"
                    ref={inputRef}
                    className="w-full p-3 rounded-xl shadow-inner"
                    placeholder="Type Your Message"
                />
                <button onClick={handleSend}>
                    <IoSend className=" text-4xl text-white p-2 bg-gray-400 rounded-full" />
                </button>
            </section>
        </>
    )
}
import { IoSend } from "react-icons/io5";
import { RiLoader2Fill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import styles from "./RealChat.module.css";
import userImg from "../../assets/user.png";
import expertImg from "../../assets/expert.png";
import uploadImg from "../../assets/uploadImg.png";
import { useParams } from "react-router";
import { db } from "../../lib/firebase";
import { Timestamp, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { upload } from "../../lib/upload";


export default function ExpertChat() {
    const params = useParams();
    const messageRef = useRef();
    const user = JSON.parse(localStorage.getItem("userData"));
    const [img, setImg] = useState({ file: null, url: "" });
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleUploadImg = (e) => {
        if (e.target.files[0]) {
            setImg({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const compinedId = user.id > params.id ? user.id + params.id : params.id + user.id;
    async function handleSend() {
        setIsLoading(true);
        if (message.trim() !== "" || img.file !== null) {
            let imgUrl = null;
            if (img.file) {
                imgUrl = await upload(img.file);
            }

            await updateDoc(doc(db, "chats", compinedId), {
                messages: arrayUnion({
                    id: uuid(),
                    senderName: user.name,
                    userRole: user.role,
                    message,
                    senderId: user.id,
                    date: Timestamp.now(),
                    ...(imgUrl && { img: imgUrl })
                }),
            });
        }
        messageRef.current?.scrollIntoView({ behavior: "smooth" });
        setIsLoading(false);
        setMessage("");
        setImg({ file: null, url: "" });
    }

    useEffect(() => {
        function getChats() {
            const unsub = onSnapshot(doc(db, "chats", compinedId), (doc) => {
                setMessages(doc.data().messages);
            });

            return () => {
                unsub();
            }
        }
        user.id && getChats();
    }, [compinedId, user.id]);
    console.log(messages);

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSend();
        }
    }


    return (
        <>
            <article className={`${styles['chat-section']} p-4 flex flex-col`}>
                {messages?.map((m) => {
                    let userPhoto;
                    let userName;
                    let sender;
                    if (user.id !== m.senderId) {
                        userPhoto = (m.userRole == "FarmOwner" ? userImg : expertImg);
                        userName = m.senderName;
                        sender = true;
                    }
                    else {
                        userPhoto = (user.role == "FarmOwner" ? userImg : expertImg);
                        userName = user.name;
                        sender = false;
                    }
                    return (
                        <div key={m.id} ref={messageRef} className={`shadow-lg w-fit p-4 m-2 rounded-xl bg-mainColor/60 my-3 ${sender ? " self-end rounded-tr-none" : "self-start rounded-tl-none bg-mainColor/80"}`}>
                            {
                                <div className="w-100 flex gap-4">
                                    <img src={userPhoto} alt="person-img" className=" w-14 p-2 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <h2 className="font-semibold">{userName}</h2>
                                        <p className=" text-wrap mt-3">{m.message}</p>
                                    </div>
                                </div>
                            }
                            {m.img &&
                                <div className="shadow-lg w-fit p-4 m-2 rounded-xl bg-mainColor/60 my-3">
                                    <img src={m.img} alt="person-img" className=" w-56 h-56 object-contain" />
                                </div>
                            }
                        </div>
                    )
                })}
            </article>

            <section className="bg-mainColor px-4 py-3 flex items-center gap-4">
                <input
                    type="text"
                    name="chat-text"
                    id="chat-text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="w-full p-3 rounded-xl shadow-inner"
                    placeholder="Type Your Message"
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                />
                <label htmlFor="imgUpload" className=" cursor-pointer">
                    <img src={uploadImg} alt="img-uploader" className="w-10" />
                </label>
                <input type="file" id="imgUpload" className=" hidden" onChange={handleUploadImg} disabled={isLoading} />
                <button onClick={handleSend} disabled={isLoading}>
                    {isLoading ?
                        <RiLoader2Fill className=" text-4xl text-white p-2 bg-gray-400 rounded-full" />
                        : <IoSend className=" text-4xl text-white p-2 bg-gray-400 rounded-full" />
                    }
                </button>
            </section>
        </>
    )
}
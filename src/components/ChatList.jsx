/* eslint-disable react/prop-types */
import { doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom"
import { db } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function ChatList() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const [chats, setChats] = useState([]);

    useEffect(() => {
        function getChats() {
            const unsub = onSnapshot(doc(db, "userChats", user.id), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            }
        }
        user.id && getChats();
    }, [user.id]);

    console.log(chats);
    let userChatsArr;
    if (chats.length !== 0) {
        userChatsArr = Object.entries(chats);
    }


    return (
        <ul className="pt-10">
            {
                userChatsArr?.map(([, userData]) => {
                    return (
                        <div key={userData.userInfo.uid}>
                            <Link to={userData.userInfo.uid}>
                                <li className="flex gap-2 py-3 px-2 border-b-2 cursor-pointer rounded transition duration-300 lg:flex-row hover:bg-gray-200">
                                    <img src={userData.userInfo.photoURL} alt="doc-photo" className=" w-10 h-10 rounded-full" />
                                    <h2>{userData.userInfo.displayName}</h2>
                                </li>
                            </Link>
                        </div>
                    )
                })
            }
        </ul>
    )
}
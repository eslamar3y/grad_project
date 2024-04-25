import { FaBars } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./RealChat.module.css";
import ChatList from "../../components/ChatList";
import Search from "../../components/Search";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import ExpertRating from "../../components/ExpertRating";


export default function ChatRoot() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const [expanded, setExpanded] = useState(false);
    const [chats, setChats] = useState([]);
    const [showRate, setShowRate] = useState(false);
    const { id } = useParams();
    console.log(user);

    function handleExpand() {
        setExpanded((open) => !open);
    }

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

    function getSelectedUser() {
        if (chats.length !== 0) {
            let userChatsArr = Object.entries(chats);
            for (let i = 0; i < userChatsArr.length; i++) {
                if ((userChatsArr[i][1]).userInfo.uid === id) {
                    return userChatsArr[i][1].userInfo;
                }
            }
        }
    }
    let selectedUser = getSelectedUser();
    console.log(selectedUser);

    function handleShowRate() {
        setShowRate(true);
    }
    function handleHideRate() {
        setShowRate(false);
    }
    function handleGetIds() {
        let doctorId = selectedUser.uid;
        let ownerId = user.id;
        const ids = { doctorId, ownerId };
        return ids;
    }

    // bg-chatBot
    return (
        <main className="min-h-svh chat-background bg-secondColor flex">
            <aside className={`transition-all duration-700 ${expanded ? "translate-x-0" : "translate-x-[-310px]"} ${styles['aside-section']} w-fit lg:w-[300px] chat-section bg-mainColor absolute border-r-2 px-5 py-4`}>
                <Search handleExpand={handleExpand} />
                <ChatList />
            </aside>
            <section className="w-full">
                <header className="flex justify-between bg-mainColor h-16 px-6 py-2">
                    <div className="flex gap-4 items-center">
                        <FaBars className="text-2xl cursor-pointer" onClick={handleExpand} />
                        {
                            selectedUser &&
                            <>
                                <div className="flex gap-2 items-center">
                                    <img src={selectedUser.photoURL} alt="ChatBot" className=" w-12 p-2 rounded-full" />
                                    <div>
                                        <h1 className="font-semibold">{selectedUser.displayName}</h1>
                                    </div>
                                </div>
                                {
                                    user.role === "FarmOwner" &&
                                    <>
                                        <button onClick={handleShowRate} className="bg-secondColor text-white px-4 py-1 shadow rounded ms-5 hover:bg-[#01707c] transition-all duration-300">Rate Me</button>
                                        {
                                            showRate &&
                                            <>
                                                <ExpertRating showRating={showRate} onCloseRating={handleHideRate} getIds={handleGetIds} />
                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                    </div>
                    <div className="flex gap-6 items-center">
                        <Link to="/">
                            <MdHome className="text-gray-600 text-2xl cursor-pointer" />
                        </Link>
                    </div>
                </header>
                <div onClick={() => setExpanded(() => false)}>
                    <Outlet />
                </div>
            </section>
        </main>
    )
}
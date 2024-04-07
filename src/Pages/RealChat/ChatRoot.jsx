import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Await, Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Suspense, useState } from "react";
import styles from "./RealChat.module.css";
import ChatList from "../../components/ChatList";
import ExpertChatLogo from "../../components/ExpertChatLogo";


export default function ChatRoot() {
    const { expertsData } = useLoaderData();
    const [expanded, setExpanded] = useState(false);
    const { id } = useParams();


    return (
        <main className="min-h-svh bg-chatBot bg-[#585dc7da] flex">
            <aside className={`transition-all duration-700 ${expanded ? "translate-x-0" : "translate-x-[-300px]"} ${styles['aside-section']} w-fit lg:w-[300px] chat-section bg-mainColor absolute border-r-2 px-5 py-4`}>
                <div className="flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-5">
                    <div className="relative">
                        <input type="text" className="rounded-3xl w-full h-full p-2 ps-9" placeholder="Search" />
                        <BsSearch className="text-sm absolute bottom-3 left-3 text-[#747881]" />
                    </div>
                    <IoClose className="text-2xl cursor-pointer" onClick={() => setExpanded((open) => !open)} />
                </div>
                <div>
                    <Suspense fallback={<p className="text-center">Loading...</p>}>
                        <Await resolve={expertsData}>
                            {
                                (loadedData) => <ChatList doctors={loadedData} />
                            }
                        </Await>
                    </Suspense>
                </div>
            </aside>
            <section className="w-full">
                <header className="flex justify-between bg-mainColor h-16 px-6 py-2">
                    <div className="flex gap-4 items-center">
                        <FaBars className="text-2xl cursor-pointer" onClick={() => setExpanded((open) => !open)} />
                        {id && <div className="flex gap-2 items-center">
                            <Suspense fallback={<p className="text-center">Loading...</p>}>
                                <Await resolve={expertsData}>
                                    {
                                        (loadedData) => <ExpertChatLogo experts={loadedData} />
                                    }
                                </Await>
                            </Suspense>
                        </div>}
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
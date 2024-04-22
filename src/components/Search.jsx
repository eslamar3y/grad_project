/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from "react";
import { SearchForUser } from "../Http/expertsHttp";
import userImg from "../assets/user.png";
import expertImg from "../assets/expert.png";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Search({ handleExpand }) {
    const user = JSON.parse(localStorage.getItem("userData"));
    const [searchTerm, setSearchTerm] = useState();
    const SearchRef = useRef();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["search-data", { SearchTerm: searchTerm }],
        queryFn: ({ signal }) => SearchForUser({ SearchTerm: searchTerm, signal }),
        enabled: searchTerm !== undefined
    });

    const handleEnter = (e) => {
        if (e.code === "Enter" && SearchRef.current.value != "") {
            setSearchTerm(() => SearchRef.current.value);
        }
    }

    async function handleSelect(User) {
        // check whether the group (chats in firestore) exists, if not create
        const compinedId = user.id > User.id ? user.id + User.id : User.id + user.id;
        try {
            const res = await getDoc(doc(db, "chats", compinedId));
            if (!res.exists()) {
                // create a chat in chats collection
                await setDoc(doc(db, "chats", compinedId), { messages: [] });
                // create user chats
                await updateDoc(doc(db, "userChats", user.id), {
                    [compinedId + ".userInfo"]: {
                        uid: User.id,
                        displayName: User.userName,
                        photoURL: User.discriminator === "FarmOwner" ? userImg : expertImg
                    },
                    [compinedId + ".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "userChats", User.id), {
                    [compinedId + ".userInfo"]: {
                        uid: user.id,
                        displayName: user.name,
                        photoURL: user.role === "FarmOwner" ? userImg : expertImg,
                    },
                    [compinedId + ".date"]: serverTimestamp()
                });
            }
        }
        catch (err) {
            throw new Error("Failed to load chat data");
        }
        setSearchTerm(null);
        SearchRef.current.value = "";
    }


    return (
        <>
            <div className="flex gap-4 items-center lg:gap-5 mb-4">
                <div className="relative">
                    <input type="text" className="rounded-3xl w-full h-full p-2 ps-9" placeholder="Search" ref={SearchRef} onKeyDown={handleEnter} />
                    <BsSearch className="text-sm absolute bottom-3 left-3 text-[#747881]" />
                </div>
                <IoClose className="text-2xl cursor-pointer" onClick={handleExpand} />
            </div>
            {
                isLoading &&
                <p className="text-center">Loading ....</p>
            }
            {
                isError &&
                <p className="flex justify-center items-center text-2xl text-red-500 my-3">
                    {error.info?.message || "Failed to load chat data, please try again later"}
                </p>
            }
            {
                user.role === "FarmOwner" ?
                    data && data.filter((us) => us.discriminator === "Doctor")
                        .map((us) => {
                            return (
                                <div key={us.id} className=" my-4 p-3 bg-neutral-200 rounded flex gap-2 cursor-pointer" onClick={() => handleSelect(us)}>
                                    <img src={expertImg} alt="user-Img" className="w-8 object-cover" />
                                    <h2>{us.userName}</h2>
                                </div>
                            )
                        }) :
                    data && data.filter((us) => us.discriminator === "FarmOwner")
                        .map((us) => {
                            return (
                                <div key={us.id} className=" my-4 p-3 bg-neutral-200 rounded flex gap-2 cursor-pointer" onClick={() => handleSelect(us)}>
                                    <img src={userImg} alt="user-Img" className="w-8 object-cover" />
                                    <h2>{us.userName}</h2>
                                </div>
                            )
                        })
            }
            <hr className="w-1/2 h-1 bg-white m-auto" />
        </>
    )
}
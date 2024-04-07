import styles from "./RealChat.module.css";
import { CiChat1 } from "react-icons/ci";


export default function RealChat() {
  return (
    <article className={`${styles['chat-section']} p-4 flex flex-col justify-center items-center`}>
      <CiChat1 className=" text-7xl text-[#B4B7BB]" />
      <p className="text-xl font-semibold text-[#B4B7BB]">Select an expert to chat with him/her</p>
    </article>
  )
}
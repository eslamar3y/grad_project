import styles from "./RealChat.module.css";
import { CiChat1 } from "react-icons/ci";


export default function RealChat() {
  // const [expanded, setExpanded] = useState(false);


  return (
    <article className={`${styles['chat-section']} p-4 flex flex-col justify-center items-center`}>
      <CiChat1 className=" text-7xl text-[#B4B7BB]" />
      <p className="text-xl font-semibold text-[#B4B7BB]">Select an expert to chat with him/her</p>
    </article>
  )
}

{/* <section className="w-full">
<header className="flex justify-between bg-mainColor px-6 py-2">
  <div className="flex gap-4 items-center">
    <FaBars className="text-2xl cursor-pointer" onClick={() => setExpanded((open) => !open)} />
    <div className="flex gap-2 items-center">
      <img src={chat} alt="ChatBot" className=" w-12 p-2 rounded-full" />
      <div>
        <h1 className=" font-semibold">Doc Bot</h1>
      </div>
    </div>
  </div>
  <div className="flex gap-6 items-center">
    <Link to="/">
      <MdHome className="text-gray-600 text-2xl cursor-pointer" />
    </Link>
  </div>
</header>
<article className={`${styles['chat-section']} p-4`} onClick={() => setExpanded(() => false)}>
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
<section className="bg-mainColor px-4 py-3 flex items-center gap-4" onClick={() => setExpanded(() => false)}>
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
</section> */}
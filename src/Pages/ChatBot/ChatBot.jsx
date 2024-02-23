// import { BsSearch } from "react-icons/bs";
// import { FaPhoneAlt } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { FaBars } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import chat from "../../assets/chat-bot.png";
import styles from "./ChatBot.module.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Comment } from "react-loader-spinner";


const API_KEY = "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";

export default function ChatBot() {
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef();
  const [messages, setMessages] = useState([
    {
      message: "Hello, how can i help you?",
      sender: "ChatGPT"
    }
  ]);

  async function handleSend() {
    const newMessage = {
      message: inputRef.current.value,
      sender: 'user',
      // direction: 'outgoing',
    }
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((msObj) => {
      let role = "";
      if (msObj.sender === "ChatGPT") {
        role = "assistant";
      }
      else {
        role = "user";
      }
      return { role: role, content: msObj.message }
    })

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like i am 10 years old"
    }
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    });
    const data = await res.json();
    // console.log(data.choices[0].message.content);
    setMessages(
      [
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }
      ]
    );
    setIsTyping(false);
  }

  return (
    <main className="min-h-svh bg-[#585dc7da] bg-chatBot flex">
      {/* <aside className="w-20 lg:w-[300px] min-h-svh bg-mainColor relative border-r-2 px-5 py-4">
                <FaBars className="text-2xl cursor-pointer" />
            </aside> */}
      <section className="w-full">
        <header className="flex justify-between bg-mainColor px-6 py-2">
          <div className="flex gap-3 items-center">
            <img src={chat} alt="ChatBot" className=" w-12 p-2 rounded-full" />
            <div>
              {
                isTyping
                &&
                <p>
                  <Comment
                    // visible={true}
                    height="30"
                    width="30"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="rgb(59 130 246 / 50%)"
                  />
                </p>
              }
              <h1 className=" font-semibold">Doc Bot</h1>
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
          {/* <IoMdAddCircleOutline className="text-gray-400 text-4xl" /> */}
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
      </section>
    </main>
  )
}
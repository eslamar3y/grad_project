// import { MdHome } from "react-icons/md";
// import { IoSend } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import chat from "../../assets/chat-bot.png";
// import styles from "./ChatBot.module.css";
// import { Link } from "react-router-dom";
// import { useRef, useState } from "react";
// import { Comment } from "react-loader-spinner";


// const API_KEY = "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";

// export default function ChatBot() {
//   const [isTyping, setIsTyping] = useState(false);
//   const inputRef = useRef();
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, how can i help you?",
//       sender: "ChatGPT"
//     }
//   ]);

//   async function handleSend() {
//     const newMessage = {
//       message: inputRef.current.value,
//       sender: 'user',
//     }
//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     inputRef.current.value = '';
//     setIsTyping(true);
//     await processMessageToChatGPT(newMessages);
//   }

//   async function processMessageToChatGPT(chatMessages) {
//     let apiMessages = chatMessages.map((msObj) => {
//       let role = "";
//       if (msObj.sender === "ChatGPT") {
//         role = "assistant";
//       }
//       else {
//         role = "user";
//       }
//       return { role: role, content: msObj.message }
//     })

//     const systemMessage = {
//       role: "system",
//       content: "Explain all concepts like i am 10 years old"
//     }
//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,
//         ...apiMessages
//       ]
//     }

//     const res = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
//     });
//     const data = await res.json();
//     setMessages(
//       [
//         ...chatMessages,
//         {
//           message: data.choices[0].message.content,
//           sender: "ChatGPT"
//         }
//       ]
//     );
//     setIsTyping(false);
//   }

//   return (
//     <main className="min-h-svh bg-secondColor bg-chatBot flex">
//       <section className="w-full">
//         <header className="flex justify-between bg-mainColor px-6 py-2">
//           <div className="flex gap-3 items-center">
//             <img src={chat} alt="ChatBot" className=" w-12 p-2 rounded-full" />
//             <div>
//               {
//                 isTyping
//                 &&
//                 <p>
//                   <Comment
//                     height="30"
//                     width="30"
//                     ariaLabel="comment-loading"
//                     wrapperStyle={{}}
//                     wrapperClass="comment-wrapper"
//                     color="#fff"
//                     backgroundColor="rgb(59 130 246 / 50%)"
//                   />
//                 </p>
//               }
//               <h1 className=" font-semibold">Doc Bot</h1>
//             </div>
//           </div>
//           <div className="flex gap-6 items-center">
//             <Link to="/">
//               <MdHome className="text-gray-600 text-2xl cursor-pointer" />
//             </Link>
//           </div>
//         </header>
//         <article className={`${styles['chat-section']} p-4`}>
//           {messages.map((message, i) => {
//             let isBot = message.sender === "ChatGPT";
//             return (
//               <div key={i} className="p-4 m-2 rounded bg-mainColor/60 my-3 flex items-start">
//                 {
//                   isBot ?
//                     <img src={chat} alt="ChatBot" className=" w-10 p-2 rounded-full" /> :
//                     <FaUserCircle className=" text-2xl text-secondColor/90 block m-2" />
//                 }
//                 <p className="mt-3">{message.message}</p>
//               </div>
//             )
//           })}
//         </article>
//         <section className="bg-mainColor px-4 py-3 flex items-center gap-4">
//           <input
//             type="text"
//             name="chat-text"
//             id="chat-text"
//             ref={inputRef}
//             className="w-full p-3 rounded-xl shadow-inner"
//             placeholder="Type Your Message"
//           />
//           <button onClick={handleSend}>
//             <IoSend className=" text-4xl text-white p-2 bg-gray-400 rounded-full" />
//           </button>
//         </section>
//       </section>
//     </main>
//   )
// }

import { MdHome } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import chat from "../../assets/chat-bot.png";
import styles from "./ChatBot.module.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Comment } from "react-loader-spinner";


export default function ChatBot() {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, how can i help you?",
      sender: "ChatGPT"
    }
  ]);
  const chatContainerRef = useRef(null);

  async function handleSend() {
    const newMessage = {
      message: inputValue,
      sender: 'user',
    }
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);
    await HandleMessagesWithAi(newMessages);
  }

  async function HandleMessagesWithAi(chatMessages) {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB0Qze7FISbW-HeDlfYVDtnltfik1RcgbM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "contents": [{ "parts": [{ "text": `Could you please provide a brief summary or key points about [${inputValue}]?` }] }] })
    });
    const data = await res.json();

    setMessages(
      [
        ...chatMessages,
        {
          message: data.candidates[0].content.parts[0].text,
          sender: "ChatGPT"
        }
      ]
    );
    chatContainerRef.current.scrollIntoView();
    setIsTyping(false);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };


  return (
    <main className="min-h-svh bg-secondColor bg-chatBot flex">
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
          </div>
        </header>
        <article className={`${styles['chat-section']} p-4`}>
          {messages.map((message, i) => {
            let isBot = message.sender === "ChatGPT";
            return (
              <div key={i} className="p-4 m-2 rounded bg-mainColor/60 my-3 flex items-start" ref={chatContainerRef}>
                {
                  isBot ?
                    <img src={chat} alt="ChatBot" className=" w-10 p-2 rounded-full" /> :
                    <FaUserCircle className=" text-2xl text-secondColor/90 block m-2" />
                }
                {/* <p className="mt-3">{message.message}</p> */}
                <div className="mt-3">
                  {message.message?.split('\n').map((line, index) => (
                    <p key={index}>{line?.replace(/\*\*/g, '').replace(/\*/g, '--> ')}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </article>
        <section className="bg-mainColor px-4 py-3 flex items-center gap-4">
          <input
            type="text"
            name="chat-text"
            id="chat-text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="w-full p-3 rounded-xl shadow-inner"
            placeholder="Type Your Message"
            disabled={isTyping}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSend} disabled={isTyping}>
            <IoSend className=" text-4xl text-white p-2 bg-gray-400 rounded-full" />
          </button>
        </section>
      </section>
    </main>
  )
}
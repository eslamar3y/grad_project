/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const initialState = {
        chatId: "null",
        user: {},
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                const updatedState = {
                    user: action.payload,
                    chatId: user.id > action.payload.uid ?
                        user.id + action.payload.uid :
                        action.payload.uid + user.id,
                };
                // Save the updated state to local storage
                localStorage.setItem("chatState", JSON.stringify(updatedState));
                return updatedState;
            default:
                return state;
        }
    }

    const chat_data = JSON.parse(localStorage.getItem("chatState")) || initialState;
    const [state, dispatch] = useReducer(chatReducer, initialState);

    // Update local storage whenever state changes
    useEffect(() => {
        localStorage.setItem("chatState", JSON.stringify(state));
    }, [state]);

    return (
        <ChatContext.Provider value={{ data: state, dispatch, chat_data }}>
            {children}
        </ChatContext.Provider>
    );
}
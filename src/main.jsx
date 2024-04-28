import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./store/AuthContext.jsx";
import SubscriptionContextProvider from "./store/SubscriptionContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <SubscriptionContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SubscriptionContextProvider>
  </AuthContextProvider>
);
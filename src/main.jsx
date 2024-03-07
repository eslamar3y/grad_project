import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./rtk/store.js";
import AuthContextProvider from "./store/AuthContext.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
//   {
//     path: "register",
//     element: <Register />,
//   },
//   {
//     path: "forgot",
//     element: <Forgot />,
//   },
//   {
//     path: "reset",
//     element: <Reset />,
//   },
//   {
//     path: "resetPass",
//     element: <ResetPass />,
//   },
//   {
//     path: "passChanged",
//     element: <PassChanged />,
//   },
//   {
//     path: "detection",
//     element: <DiseaseDetection />,
//   },
//   {
//     path: "equipments",
//     element: <Equipments />,
//   },
//   {
//     path: "result",
//     element: <DiseaseDetectionResults />,
//   },
//   {
//     path: "expert",
//     element: <ExpertInfo />,
//   },
//   {
//     path: "disease",
//     element: <DiseaseInfo />,
//   },
//   {
//     path: "chat",
//     element: <ChatBot />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   // make 404 page
//   {
//     path: "*",
//     element: (
//       <h1 className="text-center mt-80 font-bold font-popins">
//         404 - Not Found
//       </h1>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

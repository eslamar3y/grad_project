import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Reset from "./Pages/passPages/Reset.jsx";
import ResetPass from "./Pages/passPages/ResetPass.jsx";
import PassChanged from "./Pages/passPages/PassChanged.jsx";
import Forgot from "./Pages/passPages/forgot.jsx";
import DiseaseDetection from "./Pages/DiseaseDetection/DiseaseDetection.jsx";
import Equipments from "./Pages/Equipments/Equipments.jsx";
import DiseaseDetectionResults from "./Pages/DiseaseDetection/DiseaseDetectionResults.jsx";
import ExpertInfo from "./Pages/Expert/ExpertInfo.jsx";
import DiseaseInfo from "./Pages/Disease/DiseaseInfo.jsx";
import ChatBot from "./Pages/ChatBot/ChatBot.jsx";
import About from "./Pages/About/About.jsx";
import Users from "./Pages/Admin/users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgot",
    element: <Forgot />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  {
    path: "resetPass",
    element: <ResetPass />,
  },
  {
    path: "passChanged",
    element: <PassChanged />,
  },
  {
    path: "detection",
    element: <DiseaseDetection />,
  },
  {
    path: "equipments",
    element: <Equipments />,
  },
  {
    path: "result",
    element: <DiseaseDetectionResults />,
  },
  {
    path: "expert",
    element: <ExpertInfo />,
  },
  {
    path: "disease",
    element: <DiseaseInfo />,
  },
  {
    path: "chat",
    element: <ChatBot />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "admin/dashboard",
    element: <Users />,
  },
  // make 404 page
  {
    path: "*",
    element: (
      <h1 className="text-center mt-80 font-bold font-popins">
        404 - Not Found
      </h1>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
